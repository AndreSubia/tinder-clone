import { Color } from '@styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const ActionButtonContainer = styled.TouchableOpacity<{
  size: number;
  isPressed?: boolean;
  backgroundColor?: string;
  elevation?: boolean;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius:  ${({ size }) => size / 2}px;
  background-color: ${({ isPressed, backgroundColor }) => (isPressed ? Color.red : backgroundColor || Color.white)};
  justify-content: center;
  align-items: center;
  ${({ elevation }) =>
    elevation &&
    Platform.select({
      ios: `
        shadow-color: ${Color.black};
        shadow-offset: 0px 0px;
        shadow-opacity: 0.1;
        shadow-radius: 2.5px;
      `,
      android: `
        elevation: 2.5;
      `,
    })}
`;

export const ActionButtonGradientContainer = styled(LinearGradient)<{
  size: number;
  isPressed?: boolean;
  backgroundColor?: string;
  elevation?: boolean;
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  justify-content: center;
  align-items: center;
  ${({ elevation }) =>
    elevation &&
    Platform.select({
      ios: `
        shadow-color: ${Color.black};
        shadow-offset: 0px 0px;
        shadow-opacity: 0.1;
        shadow-radius: 2.5px;
      `,
      android: `
        elevation: 2.5;
      `,
    })}
`;
