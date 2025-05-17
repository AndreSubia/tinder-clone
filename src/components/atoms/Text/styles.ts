import styled from 'styled-components/native';
import { Color } from '../../../styles/colors';
import { Typography, type TypographyType } from '../../../styles/typography';

import type { ColorName } from '../../../styles/colors';
interface StyledTextProps {
  variant: TypographyType;
  color: ColorName;
}

export const StyledText = styled.Text<StyledTextProps>`
  ${({ variant }) => Typography[variant]};
  color: ${({ color }) => Color[color]};
`;
