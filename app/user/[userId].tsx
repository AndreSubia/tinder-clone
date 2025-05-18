import { GradientView } from '@components/atoms/GradientView/GradientView';
import { Header } from '@components/molecules/Header/Header';
import { Color } from '@styles/colors';
import { Image } from 'expo-image';
import { useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet, Text } from 'react-native';
import { getUserById } from 'src/data/users';

export default function index() {
  const { userId } = useLocalSearchParams<{ userId: string }>();
  const user = getUserById(userId);
  const router = useRouter();

  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });

  if (!user) {
    return null;
  }

  return (
    <GradientView>
      <Image
        key={user.id}
        style={[StyleSheet.absoluteFillObject]}
        source={user.picture_url}
        contentFit="cover"
        transition={1000}
      />
      <Header
        onLeftPress={handleGoBack}
        leftIcon="close"
        leftIconColor={Color.black}
        rightIcon="ellipsis-vertical-sharp"
        rightIconColor={Color.black}
      />
    </GradientView>
  );
}
