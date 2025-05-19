import styled from 'styled-components/native';

export const ModalContainer = styled.View<{ width: number }>`
  position: absolute;
  bottom: 0;
  width: ${({ width }) => width}px;
`;

export const ToggleButtonContainer = styled.View`
  position: absolute;
  right: 32px;
  top: -16px;
  z-index: 2;
`;
