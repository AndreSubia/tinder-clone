import type { ColorName } from '@styles/colors';
import type { TypographyType } from '../../../styles/typography';
import { StyledText } from './styles';

interface TextProps {
  children: React.ReactNode;
  variant?: TypographyType;
  color?: ColorName;
}

export const Text = ({
  color = 'white',
  children,
  variant = 'body',
}: TextProps) => {
  return (
    <StyledText color={color} variant={variant}>
      {children}
    </StyledText>
  );
};
