import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { spacing, colors } from '../../theme';

type styles = {
  container: ViewStyle;
  overlay: ViewStyle;
  gif: ViewStyle;
};

export default StyleSheet.create<styles>({
  container: {
    position: 'absolute',
    zIndex: 9999,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  gif: {
    zIndex: 3,
    width: 100,
    height: 100,
  },
});
