import { Color } from '@styles/colors';
import styled from 'styled-components/native';

export const ActionButtonContainer = styled.TouchableOpacity<{
  size: number;
  isPressed?: boolean;
  backgroundColor?: string;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius:  ${({ size }) => size / 2}px;
  background-color: ${({ isPressed, backgroundColor }) => (isPressed ? Color.red : backgroundColor || Color.white)};
  justify-content: center;
  align-items: center;
`;
