import { Platform } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import { interpolate, runOnJS, withSpring } from 'react-native-reanimated';

import type { SharedValue } from 'react-native-reanimated';

export const createCardGestures = (
  translationX: SharedValue<number>,
  currentIndex: SharedValue<number>,
  index: number,
  setCardStatus: (status: 'like' | 'dislike' | 'superlike' | undefined) => void,
) => {
  return Gesture.Pan()
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
        if (Math.sign(event.velocityX) === 1) {
          runOnJS(setCardStatus)('like');
        }
        currentIndex.value = withSpring(index + 1);
      } else {
        translationX.value = withSpring(0);
      }
    });
};
