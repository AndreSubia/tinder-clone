import { Color } from '@styles/colors';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function _layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: Color.pink,
            width: 250,
          },
          swipeEnabled: true,
          swipeEdgeWidth: 50,
          overlayColor: 'transparent',
        }}
      />
    </GestureHandlerRootView>
  );
}
