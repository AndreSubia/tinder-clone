import { Image } from 'expo-image';
import React from 'react';
import { Platform, StyleSheet, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import type { User } from 'src/data/users';

interface CardProps {
  user: User;
  index: number;
  usersLength: number;
  currentIndex: SharedValue<number>;
}

export const Card = ({ user, index, usersLength, currentIndex }: CardProps) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const translationX = useSharedValue(0);
  const CARD_WIDTH = SCREEN_WIDTH * 0.85;

  const cardStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.9, 1, 1],
    ),
    transform: [
      {
        scale: interpolate(
          currentIndex.value,
          [index - 1, index, index + 1],
          [0.95, 1, 1],
        ),
      },
      {
        translateY: interpolate(
          currentIndex.value,
          [index - 1, index, index + 1],
          [-30, 0, 0],
        ),
      },
      {
        translateX: translationX.value,
      },
      {
        rotateZ: `${interpolate(
          translationX.value,
          [-CARD_WIDTH / 2, 0, CARD_WIDTH / 2],
          [-15, 0, 15],
        )}deg`,
      },
    ],
  }));

  const gesture = Gesture.Pan()
    .onChange((event) => {
      translationX.value = event.translationX;
      currentIndex.value = interpolate(
        Math.abs(translationX.value),
        [0, 500],
        [index, index + 0.8],
      );
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) > (Platform.OS === 'ios' ? 400 : 200)) {
        translationX.value = withSpring(Math.sign(event.velocityX) * 600, {
          velocity: event.velocityX,
        });
        currentIndex.value = withSpring(index + 1);
      } else {
        translationX.value = withSpring(0);
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            height: '100%',
            width: CARD_WIDTH,
            zIndex: usersLength - index,
          },
          cardStyle,
        ]}
      >
        <Image
          style={[
            StyleSheet.absoluteFillObject,
            {
              borderRadius: 30,
            },
          ]}
          source={user.picture_url}
          contentFit="cover"
        />
      </Animated.View>
    </GestureDetector>
  );
};
