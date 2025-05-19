import { Color } from '@styles/colors';
import { Image } from 'expo-image';
import { SVGProps } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

interface FilterButtonProps {
  size: number;
  isPressed?: boolean;
  backgroundColor?: string;
}

export const ButtonContainer = styled(TouchableOpacity)<FilterButtonProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || Color.white};
  opacity: ${({ isPressed }) => (isPressed ? 1 : 0.5)};
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
`;
