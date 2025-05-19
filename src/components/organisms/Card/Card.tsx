import { Text } from '@components/atoms/Text/Text';
import { CardInfo } from '@components/molecules/CardInfo/CardInfo';
import { Filters } from '@components/molecules/Filters/Filters';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '@styles/colors';
import { useRouter } from 'expo-router';
import React, { memo, useCallback, useState } from 'react';
import {
  type StyleProp,
  StyleSheet,
  type ViewStyle,
  useWindowDimensions,
} from 'react-native';
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

import type { AnimatedStyle, SharedValue } from 'react-native-reanimated';
import type { User } from 'src/types/data';
import type { IconNames } from 'src/types/icons';
import type { FilterStatus, InteractionStatus } from 'src/types/status';
import { createCardGestures } from './gestures';
import {
  CardImage,
  CardInfoContainer,
  FiltersContainer,
  SuperLikeButton,
} from './styles';

interface CardProps {
  user: User;
  index: number;
  usersLength: number;
  currentIndex: SharedValue<number>;
}

const Card = memo(({ user, index, usersLength, currentIndex }: CardProps) => {
  const router = useRouter();
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const CARD_WIDTH = SCREEN_WIDTH * 0.85;

  // Shared values
  const translationX = useSharedValue(0);
  const superLikeActive = useSharedValue(0);
  const [cardStatus, setCardStatus] = useState<InteractionStatus>(undefined);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('friendship');

  useAnimatedReaction(
    () => currentIndex.value,
    (value) => {
      if (value === 0) {
        translationX.value = withTiming(0, { duration: 1000 });
        superLikeActive.value = 0;
        runOnJS(setCardStatus)(undefined);
      }
    },
    [currentIndex],
  );

  // Gesture handlers
  const gesture = createCardGestures(
    translationX,
    currentIndex,
    index,
    setCardStatus,
  );

  // Action handlers
  const handleDislike = useCallback(() => {
    setCardStatus('dislike');
    triggerSwipe('left');
  }, []);

  const handleLike = useCallback(() => {
    setCardStatus('like');
    triggerSwipe('right');
  }, []);

  const handleSuperLike = useCallback(() => {
    setCardStatus('superlike');
    superLikeActive.value = withTiming(1, { duration: 1000 });
  }, [superLikeActive]);

  const handleOpenMoreInfo = useCallback(() => {
    router.push({
      pathname: `./bio/${user.id}`,
      params: {
        filterStatus: filterStatus,
      },
    });
  }, [user.id, router, filterStatus]);

  const handleFilterChange = useCallback((newStatus: FilterStatus) => {
    setFilterStatus(newStatus);
  }, []);

  const triggerSwipe = useCallback(
    (direction: 'left' | 'right') => {
      const multiplier = direction === 'left' ? -1 : 1;
      translationX.value = withSpring(multiplier * 700, {
        velocity: multiplier * 50,
        damping: 20,
        stiffness: 90,
        mass: 2.2,
      });
      currentIndex.value = index + 1;
    },
    [currentIndex, index, translationX],
  );

  // Animated styles
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

  const overlayStyle = useAnimatedStyle(() => {
    const isSuperLike = cardStatus === 'superlike';

    if (isSuperLike) {
      return {
        opacity: interpolate(superLikeActive.value, [0, 1], [0, 0.5]),
        backgroundColor: Color.pink,
      };
    }

    return {
      opacity: interpolate(
        Math.abs(translationX.value),
        [0, CARD_WIDTH / 4, CARD_WIDTH],
        [0, 0.4, 0.4],
      ),
      backgroundColor:
        Math.sign(translationX.value) < 0 ? Color.smoke : Color.pink,
    };
  });

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

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.card,
          {
            width: CARD_WIDTH,
            backgroundColor: user.background?.end ?? Color.dust,
            zIndex: usersLength - index,
          },
          cardAnimatedStyle,
        ]}
      >
        <CardImage
          source={user.picture_url}
          contentFit="cover"
          transition={500}
        />
        <Animated.View style={[styles.overlay, overlayStyle]} />

        {/* Like/Dislike icons */}
        <AnimatedStatusIcon
          isVisible={cardStatus !== 'superlike'}
          style={likeIconStyle}
          name="checkmark-sharp"
        />
        <AnimatedStatusIcon
          isVisible={cardStatus !== 'superlike'}
          style={dislikeIconStyle}
          name="close"
        />

        {/* Super Like UI */}
        <SuperLikeUI style={superLikeTextStyle} userId={user.id} />

        {/* Filters */}
        <FiltersContainer>
          <Filters
            status={filterStatus}
            onFriendship={() => runOnJS(handleFilterChange)('friendship')}
            onDating={() => runOnJS(handleFilterChange)('dating')}
            onRelationship={() => runOnJS(handleFilterChange)('relationship')}
          />
        </FiltersContainer>

        {/* Card Info */}
        <CardInfoContainer>
          <CardInfo
            status={cardStatus}
            onDislike={handleDislike}
            onLike={handleLike}
            onSuperLike={handleSuperLike}
            onOpenMoreInfo={handleOpenMoreInfo}
            user={user}
          />
        </CardInfoContainer>
      </Animated.View>
    </GestureDetector>
  );
});

interface AnimatedStatusIconProps {
  isVisible: boolean;
  style: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
  name: IconNames;
}

interface SuperLikeUIProps {
  style: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
  userId: string | number;
}

const AnimatedStatusIcon = memo(
  ({ isVisible, style, name }: AnimatedStatusIconProps) => {
    if (!isVisible) return null;

    return (
      <Animated.View style={[styles.iconContainer, style]}>
        <Ionicons name={name} size={100} color={Color.white} />
      </Animated.View>
    );
  },
);

const SuperLikeUI = memo(({ style, userId }: SuperLikeUIProps) => {
  const router = useRouter();

  return (
    <Animated.View style={[styles.superLikeContainer, style]}>
      <SuperLikeButton onPress={() => router.replace(`/match/${userId}`)}>
        <Text color="white" variant="h2">
          SUPER
        </Text>
        <Text color="white" variant="h2">
          LIKE
        </Text>
      </SuperLikeButton>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    height: '100%',
    borderRadius: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 30,
  },
  iconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '45%',
  },
  superLikeContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
  },
});

export default Card;
