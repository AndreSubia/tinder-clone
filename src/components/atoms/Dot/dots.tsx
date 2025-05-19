import { Color } from '@styles/colors';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

type DotProps = {
  index: number;
  x: SharedValue<number>;
  screenWidth: number;
};

const Dot = ({ index, x, screenWidth }: DotProps) => {
  const animationDotStyle = useAnimatedStyle(() => {
    const widthAnimation = interpolate(
      x.value,
      [
        (index - 1) * screenWidth,
        screenWidth * index,
        (index + 1) * screenWidth,
      ],
      [10, 25, 10],
      Extrapolation.CLAMP,
    );
    const opacityAnimation = interpolate(
      x.value,
      [
        (index - 1) * screenWidth,
        screenWidth * index,
        (index + 1) * screenWidth,
      ],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    );
    return {
      width: widthAnimation,
      //color: x.value
      opacity: opacityAnimation,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: 8,
          height: 8,
          backgroundColor: Color.white,
          borderRadius: 5,
          marginHorizontal: 5,
        },
        animationDotStyle,
      ]}
    />
  );
};

export default Dot;
