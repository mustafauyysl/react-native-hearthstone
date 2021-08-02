import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { colors, spacing } from '@theme';

type styles = {
  modal: ViewStyle;
  modalHeader: ViewStyle;
  modalInner: ViewStyle;
  buttonContainer: ViewStyle;
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
  modalTxt: TextStyle;
  closeIcon: ViewStyle;
};

export default StyleSheet.create<styles>({
  modal: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    backgroundColor: colors.dim,
    width: '100%',
    borderTopLeftRadius: spacing[4],
    borderTopRightRadius: spacing[4],
    paddingVertical: spacing[4],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[4],
  },
  modalInner: {
    paddingHorizontal: spacing[4],
    borderTopLeftRadius: spacing[4],
    paddingVertical: spacing[5],
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing[5],
  },
  primaryButton: {
    marginHorizontal: spacing[2],
    paddingHorizontal: spacing[2],
    backgroundColor: colors.red,
  },
  secondaryButton: {
    width: '45%',
    marginHorizontal: spacing[2],
    backgroundColor: colors.btnGray,
  },
  modalTxt: {
    marginTop: spacing[4],
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
});
