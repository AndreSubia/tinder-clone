import { useColor } from '@providers/colorProvider';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import type { ReactNode } from 'react';

interface GradientViewProps {
  children: ReactNode;
}

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
