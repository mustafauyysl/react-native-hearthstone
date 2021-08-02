import { TextProps as TextProperties, TextStyle, ViewStyle } from 'react-native';
import { TextPresets } from './text.presets';

export interface TextProps extends TextProperties {
  children?: React.ReactNode;
  tx?: string;
  error?: boolean;
  txOptions?: I18n.TranslateOptions;
  text?: string | any;
  color?: string;
  style?: TextStyle | TextStyle[];
  type?: TextPresets;
  size?: number;
  lineHeight?: number;
  onPress?(): void;
  txtBtnStyle?: ViewStyle;
  align?: string;
}
