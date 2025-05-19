import { Color } from '@styles/colors';
import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface FilterButtonProps {
  size: number;
  isPressed?: boolean;
  backgroundColor?: string;
}

interface TextContainerProps {
  size: number;
}

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const ButtonContainer = styled(TouchableOpacity)<FilterButtonProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || Color.white};
  opacity: ${({ isPressed }) => (isPressed ? 1 : 0.6)};
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
`;

export const TextContainer = styled.View<TextContainerProps>`
  position: absolute;
  top: ${({ size }) => size}px;
  width: ${({ size }) => size * 2}px;
  align-items: center;
`;
