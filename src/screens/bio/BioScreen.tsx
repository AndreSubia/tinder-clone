import { Chip } from '@components/atoms/Chip/Chip';
import { GradientView } from '@components/atoms/GradientView/GradientView';
import { Text } from '@components/atoms/Text/Text';
import { ActionButtons } from '@components/molecules/ActionButtons/ActionButtons';
import { Header } from '@components/molecules/Header/Header';
import { Modal } from '@components/molecules/Modal/Modal';
import Pagination from '@components/molecules/Pagination/Pagination';
import { Color } from '@styles/colors';
import { Image } from 'expo-image';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
import {
  type FlatList,
  StatusBar,
  View,
  type ViewToken,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { carouselData, getUserById } from 'src/data/data';
import type { CarouselItem } from 'src/types/data';
import type { FilterStatus, InteractionStatus } from 'src/types/status';
import {
  ActionButtonsContainer,
  ChipsContainer,
  ContentContainer,
  HeaderContainer,
  InterestsContainer,
  SectionContainer,
  UserInfoContainer,
} from './styles';

const getChipColors = (filterStatus: FilterStatus) => {
  switch (filterStatus) {
    case 'friendship':
      return {
        startColor: Color.lightPurple,
        endColor: Color.purple,
      };
    case 'dating':
      return {
        startColor: Color.orange,
        endColor: Color.warmOrange,
      };
    case 'relationship':
      return {
        startColor: Color.deepPink,
        endColor: Color.coral,
      };
    default:
      return {
        startColor: Color.deepPink,
        endColor: Color.coral,
      };
  }
};
interface BioScreenProps {
  userId: string;
  filterStatus: FilterStatus;
}

const BioScreen = ({ userId, filterStatus }: BioScreenProps) => {
  const user = getUserById(userId);
  const data = carouselData(userId);
  const router = useRouter();
  const flatListRef = useRef<FlatList<CarouselItem>>(null);
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const modalHeight = useSharedValue(200);
  const [status, setStatus] = useState<InteractionStatus>(undefined);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      modalHeight.value,
      [200, SCREEN_HEIGHT * 0.6],
      [1, 1.5],
      'clamp',
    );

    return {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      transform: [{ scale }],
    };
  });

  const { startColor, endColor } = getChipColors(filterStatus);

  const handleGoBack = () => {
    router.replace('/');
  };

  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]?.index !== null) {
        flatListIndex.value = viewableItems[0]?.index;
      }
    },
    [flatListIndex],
  );

  const viewabilityConfig = useRef({
    minimumViewTime: 300,
    viewAreaCoveragePercentThreshold: 10,
  });

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  if (!user) {
    return null;
  }

  return (
    <GradientView>
      <HeaderContainer width={SCREEN_WIDTH}>
        <Header
          onLeftPress={handleGoBack}
          leftIcon="close"
          leftIconColor={Color.black}
          rightIcon="ellipsis-vertical-sharp"
          rightIconColor={Color.black}
        />
      </HeaderContainer>

      <Animated.FlatList
        ref={flatListRef}
        data={data}
        onScroll={onScroll}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT,
                overflow: 'hidden',
              }}
            >
              <Animated.View style={imageAnimatedStyle}>
                <Image
                  key={item.id}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  source={item.url}
                  contentFit="cover"
                  transition={1000}
                />
              </Animated.View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
        scrollEventThrottle={16}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig.current}
      />
      <View style={{ position: 'absolute', bottom: 0, width: SCREEN_WIDTH }}>
        <Modal
          floatingHeader={
            <Pagination data={data} x={x} screenWidth={SCREEN_WIDTH} />
          }
          compressedHeight={110}
          expandedHeight={SCREEN_HEIGHT * 0.6}
          onHeightChange={(height) => {
            modalHeight.value = height;
          }}
        >
          <ContentContainer>
            <UserInfoContainer>
              <Text color="black" variant="t2">
                {user.name} {user.lastName}, {user.age}
              </Text>
              <Text color="smoke">
                {user.district}, {user.country}
              </Text>
            </UserInfoContainer>
            <InterestsContainer>
              <SectionContainer>
                <Text variant="t2" color="black">
                  Intereses
                </Text>
                <ChipsContainer>
                  {user.interests?.map((interest) => (
                    <Chip
                      key={interest}
                      text={interest}
                      startColor={startColor}
                      endColor={endColor}
                    />
                  ))}
                </ChipsContainer>
              </SectionContainer>

              <SectionContainer>
                <Text variant="t2" color="black">
                  Me considero
                </Text>
                <ChipsContainer>
                  {user.descriptions?.map((description) => (
                    <Chip
                      key={description}
                      text={description}
                      startColor={startColor}
                      endColor={endColor}
                    />
                  ))}
                </ChipsContainer>
              </SectionContainer>

              <ActionButtonsContainer>
                <ActionButtons
                  status={status}
                  onDislike={() => {
                    setStatus('dislike');
                  }}
                  onLike={() => {
                    setStatus('like');
                  }}
                  onSuperLike={() => {
                    setStatus('superlike');
                  }}
                />
              </ActionButtonsContainer>
            </InterestsContainer>
          </ContentContainer>
        </Modal>
      </View>
    </GradientView>
  );
};

export default BioScreen;
