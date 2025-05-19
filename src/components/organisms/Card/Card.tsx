import { Text } from '@components/atoms/Text/Text';
import { CardInfo } from '@components/molecules/CardInfo/CardInfo';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '@styles/colors';
import { useRouter } from 'expo-router';
import React, { memo, useState } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import type { User } from 'src/data/users';
import { createCardGestures } from './gestures';
import { CardImage, SuperLikeButton } from './styles';

interface CardProps {
  user: User;
  index: number;
  usersLength: number;
  currentIndex: SharedValue<number>;
}

const Card = ({ user, index, usersLength, currentIndex }: CardProps) => {
  const [cardStatus, setCardStatus] = useState<
    'like' | 'dislike' | 'superlike' | undefined
  >(undefined);
  const router = useRouter();
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const translationX = useSharedValue(0);
  const superLikeActive = useSharedValue(0);
  const CARD_WIDTH = SCREEN_WIDTH * 0.85;

  const triggerSwipe = (direction: 'left' | 'right') => {
    const multiplier = direction === 'left' ? -1 : 1;
    translationX.value = withSpring(multiplier * 700, {
      velocity: multiplier * 50,
      damping: 20,
      stiffness: 90,
      mass: 2.2,
    });
    currentIndex.value = index + 1;
  };

  const triggerSuperLike = () => {
    setCardStatus('superlike');
    superLikeActive.value = withTiming(1, {
      duration: 1000,
    });
  };

  useAnimatedReaction(
    () => currentIndex.value,
    (value) => {
      if (value === 0) {
        translationX.value = withTiming(0, {
          duration: 1500,
        });
        superLikeActive.value = 0;
        runOnJS(setCardStatus)(undefined);
      }
    },
  );

  const gesture = createCardGestures(
    translationX,
    currentIndex,
    index,
    setCardStatus,
  );

  const cardAnimatedStyle = useAnimatedStyle(() => ({
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

  const likeIconStyle = useAnimatedStyle(() => ({
    opacity: superLikeActive.value
      ? 0
      : interpolate(translationX.value, [0, CARD_WIDTH / 4], [0, 1]),
    transform: [
      {
        scale: interpolate(translationX.value, [0, CARD_WIDTH / 4], [0.8, 1]),
      },
    ],
  }));

  const dislikeIconStyle = useAnimatedStyle(() => ({
    opacity: superLikeActive.value
      ? 0
      : interpolate(translationX.value, [0, -CARD_WIDTH / 4], [0, 1]),
    transform: [
      {
        scale: interpolate(translationX.value, [0, -CARD_WIDTH / 4], [0.8, 1]),
      },
    ],
  }));

  const superLikeOverlayStyle = useAnimatedStyle(() => ({
    opacity:
      cardStatus === 'superlike'
        ? interpolate(superLikeActive.value, [0, 1], [0, 0.5])
        : 0,
    backgroundColor: Color.pink,
  }));

  const superLikeTextStyle = useAnimatedStyle(() => ({
    opacity:
      cardStatus === 'superlike'
        ? interpolate(superLikeActive.value, [0.5, 1], [0, 1])
        : 0,
    transform: [
      {
        scale: interpolate(superLikeActive.value, [0.5, 1], [0.8, 1]),
      },
      {
        rotate: `${interpolate(superLikeActive.value, [0.5, 1], [10, -10])}deg`,
      },
    ],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      Math.abs(translationX.value),
      [0, CARD_WIDTH / 4, CARD_WIDTH],
      [0, 0.4, 0.4],
    ),
    backgroundColor:
      Math.sign(translationX.value) < 0 ? Color.smoke : Color.pink,
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            height: '100%',
            width: CARD_WIDTH,
            zIndex: usersLength - index,
            backgroundColor: user.background?.end ?? Color.dust,
            borderRadius: 30,
          },
          cardAnimatedStyle,
        ]}
      >
        <CardImage
          source={user.picture_url}
          contentFit="cover"
          transition={500}
        />
        <Animated.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              borderRadius: 30,
            },
            cardStatus === 'superlike' ? superLikeOverlayStyle : overlayStyle,
          ]}
        />

        {cardStatus === 'superlike' && (
          <Animated.View
            style={[
              {
                position: 'absolute',
                alignSelf: 'center',
                top: '40%',
              },
              superLikeTextStyle,
            ]}
          >
            <SuperLikeButton
              onPress={() => router.replace(`/match/${user.id}`)}
            >
              <Text color="white" variant="h2">
                SUPER
              </Text>
              <Text color="white" variant="h2">
                LIKE
              </Text>
            </SuperLikeButton>
          </Animated.View>
        )}

        {cardStatus !== 'superlike' && (
          <Animated.View
            style={[
              {
                position: 'absolute',
                alignSelf: 'center',
                top: '45%',
              },
              likeIconStyle,
            ]}
          >
            <Ionicons name="checkmark-sharp" size={100} color={Color.white} />
          </Animated.View>
        )}

        {cardStatus !== 'superlike' && (
          <Animated.View
            style={[
              {
                position: 'absolute',
                alignSelf: 'center',
                top: '45%',
              },
              dislikeIconStyle,
            ]}
          >
            <Ionicons name="close" size={100} color={Color.white} />
          </Animated.View>
        )}

        <CardInfo
          status={cardStatus}
          onDislike={() => {
            setCardStatus('dislike');
            triggerSwipe('left');
          }}
          onLike={() => {
            setCardStatus('like');
            triggerSwipe('right');
          }}
          onSuperLike={() => {
            setCardStatus('superlike');
            triggerSuperLike();
          }}
          onOpenMoreInfo={() => router.push(`/bio/${user.id}`)}
          user={user}
        />
      </Animated.View>
    </GestureDetector>
  );
};

export default memo(Card);
