import { Text } from '@components/atoms/Text/Text';
import { Color } from '@styles/colors';
import React from 'react';
import { type TextInputProps, TouchableOpacity } from 'react-native';
import { InputContainer, SendButton, StyledInput } from './styles';

interface CustomInputProps extends TextInputProps {
  variant?: 'primary' | 'secondary';
  onSend?: () => void;
}

export const TextInput = ({
  variant = 'primary',
  onSend,
  ...props
}: CustomInputProps) => {
  return (
    <InputContainer>
      <StyledInput
        variant={variant}
        placeholderTextColor={Color.gray}
        {...props}
      />
      {variant === 'primary' && (
        <SendButton onPress={onSend}>
          <Text color="red" variant="button">
            ENVIAR
          </Text>
        </SendButton>
      )}
    </InputContainer>
  );
};
