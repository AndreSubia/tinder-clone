import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ToastManager from 'toastify-react-native';

import DrawerContent from '@screens/drawer/DrawerContent';
import { Color } from '@styles/colors';
import { ColorProvider } from 'src/providers/colorProvider';

export default function Layout() {
  const { width } = useWindowDimensions();

  const renderDrawerContent = useMemo(() => {
    return (props: DrawerContentComponentProps) => <DrawerContent {...props} />;
  }, []);

  return (
    <ColorProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: Color.pink,
              width: width * 0.45,
            },
            swipeEnabled: true,
            swipeEdgeWidth: 50,
            overlayColor: 'transparent',
            drawerType: 'slide',
          }}
          drawerContent={renderDrawerContent}
        />
        <ToastManager useModal={false} />
      </GestureHandlerRootView>
    </ColorProvider>
  );
}
