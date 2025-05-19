import CloseButton from '@components/atoms/CloseButton/CloseButton';
import { GradientView } from '@components/atoms/GradientView/GradientView';
import { UserProfile } from '@components/molecules/UserProfile/UserProfile';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import {
  type DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Color } from '@styles/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { userProfile } from 'src/data/data';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <GradientView>
      <View
        style={{
          marginTop: insets.top + 16,
          gap: 16,
        }}
      >
        <CloseButton
          style={{ left: 32 }}
          onPress={() => props.navigation.closeDrawer()}
        />
        <UserProfile user={userProfile} avatarSize="medium" />
      </View>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingStart: 0,
          paddingEnd: 0,
          flex: 1,
          paddingTop: 0,
        }}
      >
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View
            style={{
              paddingStart: 16,
              marginRight: -16,
            }}
          >
            <DrawerItem
              label="Lecafé"
              onPress={() => router.replace('/')}
              labelStyle={{ color: Color.white }}
              icon={() => (
                <Ionicons name="female" size={24} color={Color.white} />
              )}
            />
            <DrawerItem
              label="Mensajes"
              onPress={() => router.replace('/')}
              icon={() => (
                <Feather name="message-circle" size={24} color={Color.white} />
              )}
              labelStyle={{
                color: Color.white,
              }}
            />
            <DrawerItem
              label="Matches"
              onPress={() => router.replace('/')}
              labelStyle={{ color: Color.white }}
              icon={() => (
                <Feather name="heart" size={24} color={Color.white} />
              )}
            />
            <DrawerItem
              label="Mi Perfil"
              onPress={() => router.replace('/')}
              labelStyle={{ color: Color.white }}
              icon={() => (
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  color={Color.white}
                />
              )}
            />
            <DrawerItem
              label="Tutorial"
              onPress={() => router.replace('/')}
              labelStyle={{ color: Color.white }}
              icon={() => (
                <MaterialIcons
                  name="smartphone"
                  size={24}
                  color={Color.white}
                />
              )}
            />
            <DrawerItem
              label="Ajustes"
              onPress={() => router.replace('/')}
              labelStyle={{ color: Color.white }}
              icon={() => (
                <Feather name="settings" size={24} color={Color.white} />
              )}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Cerrar sesión"
        onPress={() => router.replace('/')}
        labelStyle={{ color: Color.white }}
        style={{
          paddingStart: 16,
          marginRight: -16,
          marginTop: 32,
          marginBottom: insets.bottom + 32,
        }}
        icon={() => (
          <SimpleLineIcons name="logout" size={24} color={Color.white} />
        )}
      />
    </GradientView>
  );
};

export default DrawerContent;
