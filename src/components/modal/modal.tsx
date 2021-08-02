import React from 'react';
import { Modal as ModalComponent, Pressable, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from '@icons';
import { Button, Text } from '@components';
import styles from './style';
import { colors } from '@theme';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { actionClearModal } from '@state/modal';
import _ from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Modal = (_props) => {
  // Translations
  const { t } = useTranslation();

  // Selector
  const props = useSelector((state) => state.modal);

  const insets = useSafeAreaInsets();

  // Dispatch
  const dispatch = useDispatch();

  const title = props.headerTitle || '';
  const {
    isVisible = false,
    closeFn,
    headerTx,
    txOptions,
    modalStyle,
    modalAlign = 'center',
    children,
    innerStyle,
    type,
    text,
    tx,
    secondButton,
    onPress,
    buttonText = 'Anladım',
    buttonTx = 'common.iAgree',
    closeIcon = true,
    onPressButton,
  } = props.isVisible ? props : _props;

  let helper = { iconName: 'ModalInfo' };
  switch (type) {
    case 'warning':
      break;
    case 'error':
      helper = { iconName: 'Succcess' };
      break;
    case 'success':
      helper = { iconName: 'Success' };
      break;
    default:
      break;
  }
  const i18nText = headerTx && t(headerTx, txOptions);
  const headerTitle = i18nText || title;
  const align = modalAlign == 'top' ? 'flex-start' : modalAlign == 'bottom' ? 'flex-end' : 'center';
  const bottomSpace = modalAlign == 'bottom' ? insets.bottom : modalAlign == 'top' ? insets.top : null;
  const _closeFn = () => {
    dispatch(actionClearModal());
    _.isFunction(closeFn) && closeFn();
  };

  // On Press Button
  const _onPressButton = () => {
    dispatch(actionClearModal());
    _.isFunction(onPressButton) && onPressButton();
  };

  // On Second Press
  const _onSecondPress = () => {
    dispatch(actionClearModal());
    _.isFunction(secondButton?.onPress) && secondButton?.onPress();
  };

  const _onPress = () => {
    dispatch(actionClearModal());
    onPress();
  };
  return (
    <ModalComponent
      animationType="fade"
      onRequestClose={_closeFn}
      transparent={true}
      statusBarTranslucent={true}
      visible={isVisible}
    >
      <View style={{ height: '100%', justifyContent: align, alignItems: 'center' }}>
        <TouchableWithoutFeedback onPress={_closeFn}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              height: '100%',
              width: '100%',
            }}
          />
        </TouchableWithoutFeedback>
        <View style={[styles.modal, modalStyle, { bottom: bottomSpace }]}>
          {title ||
            (headerTx && (
              <View style={styles.modalHeader}>
                <Text>{headerTitle}</Text>
                <TouchableHighlight underlayColor="transparent" onPress={_closeFn}>
                  <Icon name="Close" width={10} height={10} fill={colors.line} />
                </TouchableHighlight>
              </View>
            ))}
          <View style={{ ...styles.modalInner, ...innerStyle }}>
            {children || (
              <>
                {closeIcon && (
                  <Pressable style={styles.closeIcon} onPress={_closeFn}>
                    <Icon name="Close" width={10} heigth={10} fill={colors.text} />
                  </Pressable>
                )}
                <Icon name={helper?.iconName} width={40} height={40} />
                <Text text={text} tx={tx} size={11} style={styles.modalTxt} />
                <View style={styles.buttonContainer}>
                  {secondButton && (
                    <Button
                      style={styles.secondaryButton}
                      text={secondButton?.text}
                      tx={secondButton?.tx}
                      onPress={_onSecondPress}
                    />
                  )}
                  <Button
                    text={buttonText}
                    tx={buttonTx}
                    onPress={_onPressButton}
                    style={[styles.primaryButton, secondButton && { width: '50%' }]}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </ModalComponent>
  );
};
