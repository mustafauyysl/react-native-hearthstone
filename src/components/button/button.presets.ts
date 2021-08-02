import { TextStyle, ViewStyle } from 'react-native';
import { colors, spacing } from '../../theme';

const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[3],
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
};

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
  fontSize: 12,
  letterSpacing: 0.2,
};

export const viewPresets = {
  primary: { ...BASE_VIEW, backgroundColor: colors.primary } as ViewStyle,

  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'flex-start',
  } as ViewStyle,
};

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: 12,
    color: colors.white,
    textTransform: 'uppercase',
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: colors.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
};

export type ButtonPresetNames = keyof typeof viewPresets;
