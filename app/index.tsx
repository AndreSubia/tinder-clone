import { GradientView } from '@components/atoms/GradientView/GradientView';
import { Text } from '@components/atoms/Text/Text';
import { Header } from '@components/molecules/Header/Header';
import { Color } from '@styles/colors';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useColor } from 'src/context/colorContext';
import { users } from '../src/data/users';

export default function index() {
  const { setGradientColors } = useColor();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const currentIndex = useSharedValue(0);
  const translationX = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onBegin((event) => console.log(event))
    .onFinalize((event) => console.log(event))
    .onChange((event) => {
      translationX.value = event.translationX;
    })
    .onEnd(() => {
      translationX.value = withSpring(0);
    });

  useEffect(() => {
    setGradientColors({
      start: Color.purple,
      end: Color.lightPurple,
    });
  }, [setGradientColors]);

  return (
    <GradientView>
      <StatusBar style={'light'} />
      <Header />
      <GestureDetector gesture={gesture}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 32,
          }}
        >
          {users.map((user, index) => {
            const opacityStyle = useAnimatedStyle(() => ({
              opacity: interpolate(
                currentIndex.value,
                [index - 1, index, index + 1],
                [1 - 1 / 5, 1, 1],
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
                    [-40, 0, 0],
                  ),
                },
                {
                  translateX:
                    currentIndex.value === index ? translationX.value : 0,
                },
              ],
            }));

            return (
              <Animated.View
                key={user.id}
                style={[
                  {
                    position: 'absolute',
                    height: '100%',
                    width: SCREEN_WIDTH * 0.85,
                    zIndex: users.length - index,
                    opacity: 1 - 0.1 * index,
                    transform: [
                      {
                        scale: 1 - index * 0.08,
                      },
                    ],
                  },
                  opacityStyle,
                ]}
              >
                {/* {mask && (
                  <View
                    style={[
                      StyleSheet.absoluteFillObject,
                      {
                        backgroundColor: Color.white,
                        zIndex: users.length - index,
                        opacity: 0.5,
                        borderRadius: 30,
                      },
                    ]}
                  />
                )} */}
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
            );
          })}
        </View>
      </GestureDetector>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
});
