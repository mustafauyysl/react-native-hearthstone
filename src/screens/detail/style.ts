import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, colors } from '../../theme';

type styles = {
  full: ViewStyle;
  img: ImageStyle;
};

export default StyleSheet.create<styles>({
  full: {
    padding: spacing[3],
    flex: 1,
  },
  img: {
    width: 300,
    height: 400,
    alignSelf: 'center',
  },
});
