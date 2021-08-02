import * as React from 'react';
import { TextProps } from './text.props';
import { Text } from './text';
import { colors } from '../../theme';

export function ErrorText(props: TextProps) {
  const { text, error, style } = props;
  return (
    !!error && (
      <Text
        {...props}
        color={colors.angry}
        style={{
          fontSize: 12,
          ...style,
        }}
      >
        {text}
      </Text>
    )
  );
}
