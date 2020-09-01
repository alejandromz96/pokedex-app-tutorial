import React, { useState, ReactElement } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { em } from '../../config/units';
import { fontSize, fontWeight } from '../../config/fonts';
import colors from '../../config/colors';

interface ComponentProps extends TextInputProps {
  placeholder: string;
  error?: string;
  fontScale?: boolean;
  secureText?: boolean;
}

// #region

const StyledInput = styled(TextInput)`
  padding: 0 ${em(1)};
  flex: 1;
  height: ${em(2.8)};
  color: ${colors.secondary};
  font-size: ${fontSize.F13};
  letter-spacing: 1.7px;
  overflow: hidden;
  font-family: ${fontWeight.medium};
  background-color: ${colors.transparent};
`;
// #endregion

const Input = ({
  placeholder,
  fontScale = false,
  secureText,
  autoCapitalize,
}: ComponentProps): ReactElement => {
  const [value, onChangeText] = useState<string>();

  return (
    <StyledInput
      onChangeText={(text: string): void => onChangeText(text)}
      value={value}
      autoCapitalize={autoCapitalize}
      selectionColor={colors.secondary}
      placeholder={placeholder}
      placeholderTextColor={colors.greyMed}
      keyboardAppearance="light"
      allowFontScaling={fontScale}
      secureTextEntry={secureText}
    />
  );
};

export default Input;
