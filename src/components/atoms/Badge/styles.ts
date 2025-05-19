import { Color } from '@styles/colors';
import styled from 'styled-components/native';

export const BadgeContainer = styled.View<{ size: number }>`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: ${Color.deepPink};
  border-radius: ${({ size }) => size / 2}px;
  min-width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  justify-content: center;
  align-items: center;
  padding-horizontal: 4px;
`;
