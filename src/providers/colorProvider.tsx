import { Color } from '@styles/colors';
import type React from 'react';
import { createContext, use, useState } from 'react';

type GradientColors = {
  start: string;
  end: string;
};

type ColorContextType = {
  gradientColors: GradientColors;
  setGradientColors: (colors: GradientColors) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [gradientColors, setGradientColors] = useState<GradientColors>({
    start: Color.white,
    end: Color.white,
  });

  return (
    <ColorContext.Provider value={{ gradientColors, setGradientColors }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  //React 19
  const context = use(ColorContext);
  if (!context) {
    throw new Error('useColor debe ser usado dentro de un ColorProvider');
  }
  return context;
};
