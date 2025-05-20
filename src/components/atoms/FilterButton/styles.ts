import { Color } from '@styles/colors';
import { Image } from 'expo-image';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface SelectedContainerProps {
  size: number;
  radius: number;
  isPressed?: boolean;
}
interface FilterButtonProps {
  size: number;
  isPressed?: boolean;
  backgroundColor?: string;
}

interface TextContainerProps {
  size: number;
  marginTop: number;
}

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const SelectedContainer = styled(
  TouchableOpacity,
)<SelectedContainerProps>`
  position: absolute;
  zIndex: 1;
  top: -${({ radius }) => radius}px;
  width: ${({ size, radius }) => size + radius * 2}px;
  height: ${({ size, radius }) => size + radius * 2}px;
  border-radius: ${({ size, radius }) => (size / 2) + radius * 2}px;
  border-width: ${({ isPressed }) => (isPressed ? 2 : 0)}px;
  border-color: ${Color.orange};
`;

export const ButtonContainer = styled.View<FilterButtonProps>`
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
  top: ${({ size, marginTop }) => size + marginTop}px;
  width: ${({ size }) => size * 2}px;
  align-items: center;
`;
