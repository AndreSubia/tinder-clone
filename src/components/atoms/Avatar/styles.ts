import { Image } from 'expo-image';
import type { AvatarShape, AvatarSize } from 'src/types/avatar';
import styled from 'styled-components/native';

const getSize = (size: AvatarSize) => {
  switch (size) {
    case 'small':
      return 40;
    case 'large':
      return 120;
    default:
      return 90;
  }
};

export const AvatarContainer = styled.View<{
  shape: AvatarShape;
  size: AvatarSize;
  fallbackColor: string;
}>`
  width: ${({ size }) => getSize(size)}px;
  height: ${({ size }) => getSize(size)}px;
  border-radius: ${({ shape }) => (shape === 'circle' ? 999 : 12)}px;
  background-color: ${({ fallbackColor }) => fallbackColor};
  overflow: hidden;
`;

export const AvatarImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
