import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, colors } from '../../theme';

type styles = {
  container: ViewStyle;
};

export default StyleSheet.create<styles>({
  container: {
    padding: spacing[3],
    backgroundColor: colors.white,
    marginHorizontal: spacing[3],
    marginTop: spacing[3],
    borderRadius: 15,
    borderColor: colors.gray,
    borderWidth: 0.3,
    marginBottom: spacing[4],
  },
});
