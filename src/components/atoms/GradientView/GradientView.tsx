import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { useColor } from 'src/context/colorContext';

interface GradientViewProps extends PropsWithChildren {}

export const GradientView = ({ children }: GradientViewProps) => {
  const { gradientColors } = useColor();

  return (
    <LinearGradient
      colors={[gradientColors.start, gradientColors.end]}
      locations={[0, 0.9]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};
