import { Text } from '@components/atoms/Text/Text';
import { Color } from '@styles/colors';
import type { ColorName } from '@styles/colors';
import React from 'react';
import { ChipContainer } from './style';

interface ChipProps {
  text: string;
  startColor?: string;
  endColor?: string;
  textColor?: ColorName;
}

export const Chip = ({
  text,
  startColor = Color.warmOrange,
  endColor,
  textColor = 'white',
}: ChipProps) => {
  return (
    <ChipContainer
      colors={[startColor, endColor ?? startColor]}
      locations={[0, 0.9]}
      start={{ x: 0.4, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text color={textColor} variant="subNavBold">
        {text}
      </Text>
    </ChipContainer>
  );
};
