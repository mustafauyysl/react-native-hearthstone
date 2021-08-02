import { StyleSheet, ViewStyle } from 'react-native';
import { spacing, colors } from '../../theme';

type styles = {
  item: ViewStyle;
};

export default StyleSheet.create<styles>({
  item: {
    marginHorizontal: spacing[3],
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    paddingVertical: spacing[3],
    marginBottom: spacing[3],
    paddingLeft: spacing[2],
  },
});
