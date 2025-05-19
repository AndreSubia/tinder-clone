import { GradientView } from '@components/atoms/GradientView/GradientView';
import { Header } from '@components/molecules/Header/Header';
import Card from '@components/organisms/Card/Card';
import { useColor } from '@providers/colorProvider';
import { Color } from '@styles/colors';
import { useFocusEffect } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { StatusBar } from 'react-native';
import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';
import { users } from 'src/data/data';
import type { User } from 'src/types/data';
import { CardListContainer } from './styles';

const HomeScreen = () => {
  const [userList] = useState<User[]>(users);
  const { setGradientColors } = useColor();
  const [index, setIndex] = useState(0);
  const currentIndex = useSharedValue(0);

  useFocusEffect(() => {
    StatusBar.setBarStyle('light-content');
  });

  useEffect(() => {
    setGradientColors({
      start: users[index]?.background?.start ?? Color.warmOrange,
      end: users[index]?.background?.end ?? Color.coral,
    });
  }, [setGradientColors, index]);

  useAnimatedReaction(
    () => currentIndex.value,
    (val) => {
      if (Math.floor(val) !== index) {
        runOnJS(setIndex)(Math.floor(val));
      }
      // reset cards
      if (Math.floor(val) >= users.length) {
        currentIndex.value = 0;
        runOnJS(setIndex)(0);
      }
    },
  );

  const renderedCards = useMemo(() => {
    return userList.map((user, index) => (
      <Card
        key={user.id}
        user={user}
        usersLength={userList.length}
        currentIndex={currentIndex}
        index={index}
      />
    ));
  }, [userList, currentIndex]);

  return (
    <GradientView>
      <Header />
      <CardListContainer>{renderedCards}</CardListContainer>
    </GradientView>
  );
};

export default HomeScreen;
