import { Color } from '@styles/colors';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: ${Color.white};
  border-radius: 30px;
  padding-horizontal: 20px;
`;

export const StyledInput = styled.TextInput<{
  variant: 'primary' | 'secondary';
}>`
  flex: 1;
  height: 60px;
  padding-horizontal: 10px;
  background-color: ${Color.white};
  
  ${({ variant }) =>
    variant === 'primary' &&
    `
    border-radius: 20px;
    border-color: ${Color.gray};
  `}
  
  ${({ variant }) =>
    variant === 'secondary' &&
    `
    elevation: 2;
    shadow-color: ${Color.black};
    shadow-offset: 0px 2px;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
  `}
`;

export const SendButton = styled.TouchableOpacity`
  border-radius: 10px;
`;
