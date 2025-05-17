import { GradientView } from '@components/atoms/GradientView/GradientView';
import { Header } from '@components/molecules/Header/Header';
import { Card } from '@components/organisms/Card/Card';
import { useColor } from '@providers/colorProvider';
import { Color } from '@styles/colors';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';
import { users } from 'src/data/users';

export default function HomeScreen() {
  const { setGradientColors } = useColor();
  const [index, setIndex] = useState(0);
  const currentIndex = useSharedValue(0);

  useEffect(() => {
    setGradientColors({
      start: users[index]?.background?.start ?? Color.warmOrange,
      end: users[index]?.background?.end ?? Color.coral,
    });
  }, [setGradientColors, index]);

  useAnimatedReaction(
    () => currentIndex.value,
    (val, prev) => {
      if (Math.floor(val) !== index) {
        runOnJS(setIndex)(Math.floor(val));
      }
    },
  );

  return (
    <GradientView>
      <StatusBar style={'light'} />
      <Header />
      <View style={styles.cardsContainer}>
        {users.map((user, index) => {
          return (
            <Card
              key={user.id}
              user={user}
              usersLength={users.length}
              currentIndex={currentIndex}
              index={index}
            />
          );
        })}
      </View>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
});
