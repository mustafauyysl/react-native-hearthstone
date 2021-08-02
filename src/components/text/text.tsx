import * as React from 'react';
import { Pressable, Text as ReactNativeText } from 'react-native';
import { presets } from './text.presets';
import { TextProps } from './text.props';
import { flatten, mergeAll } from 'ramda';
import { useTranslation } from 'react-i18next';

export function Text(props: TextProps) {
  const {
    type = 'default',
    tx,
    txOptions,
    text,
    children,
    size,
    lineHeight,
    style: styleOverride,
    onPress,
    txtBtnStyle,
    color,
    align,
    ...rest
  } = props;
  // Translations
  const { t } = useTranslation();

  const i18nText = tx && t(tx, txOptions);
  const content = i18nText || text || children;

  const style = mergeAll(
    flatten([
      presets[type] || presets.default,
      styleOverride,
      color && { color },
      size && { fontSize: size },
      lineHeight && { lineHeight },
      align && { textAlign: align },
    ]),
  );

  if (onPress) {
    return (
      <Pressable style={txtBtnStyle} onPress={onPress}>
        <ReactNativeText {...rest} style={style}>
          {content}
        </ReactNativeText>
      </Pressable>
    );
  } else {
    return (
      <ReactNativeText {...rest} style={style}>
        {content}
      </ReactNativeText>
    );
  }
}
