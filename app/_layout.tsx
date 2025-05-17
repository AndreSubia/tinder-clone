import { Text } from '@components/atoms/Text/Text';
import { DrawerContent } from '@components/organisms/DrawerContent/DrawerContent';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Color } from '@styles/colors';
import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ColorProvider } from 'src/context/colorContext';

export default function _layout() {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  return (
    <ColorProvider>
      <GestureHandlerRootView>
        <Drawer
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: Color.pink,
              width: SCREEN_WIDTH * 0.5,
            },
            swipeEnabled: true,
            swipeEdgeWidth: 50,
            overlayColor: 'transparent',
            drawerType: 'slide',
          }}
          drawerContent={(props: DrawerContentComponentProps) => (
            <DrawerContent {...props} />
          )}
        />
      </GestureHandlerRootView>
    </ColorProvider>
  );
}
