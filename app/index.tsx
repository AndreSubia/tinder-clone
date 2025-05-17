import { Text } from '@components/atoms/Text/Text';
import { Header } from '@components/molecules/Header/Header';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Color } from '@styles/colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function index() {
  const isDrawerOpen = useDrawerStatus() === 'open';

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(isDrawerOpen ? Color.pink : Color.white, {
        duration: 300,
      }),
    };
  });

  return (
    <Animated.View style={[styles.screen, animatedStyle]}>
      <Header />
      <View style={styles.content}>
        <Text>Tinder Clone</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
});
