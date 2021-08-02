import { TextStyle } from 'react-native';
import { colors } from '../../theme';

const BASE: TextStyle = {
  color: colors.text,
  fontSize: 15,
};

export const presets = {
  default: BASE,
  bold: { ...BASE } as TextStyle,
  medium: { ...BASE } as TextStyle,
  thin: { ...BASE } as TextStyle,
  semiBold: { ...BASE } as TextStyle,
  light: { ...BASE } as TextStyle,
  header: { ...BASE, fontSize: 24, fontWeight: 'bold' } as TextStyle,
  fieldLabel: { ...BASE, fontSize: 13, color: colors.dim } as TextStyle,
  secondary: { ...BASE, fontSize: 9, color: colors.dim } as TextStyle,
};

export type TextPresets = keyof typeof presets;
