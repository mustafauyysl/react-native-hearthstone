import React from 'react';
import { TextInput } from 'react-native';
// Styles
import style from './style';
// Props
import { InputProps } from './input.props';

const Input = (props: InputProps) => {
  const { placeholder, value, onChangeText } = props;
  return <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={style.container} />;
};

export { Input };
