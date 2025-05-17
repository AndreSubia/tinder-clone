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
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GradientView } from '../../atoms/GradientView/GradientView';

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const router = useRouter();

  return (
    <GradientView>
      <StatusBar style={'light'} />

      <DrawerContentScrollView
        contentContainerStyle={{
          paddingStart: 0,
          paddingEnd: 0,
          flex: 1,
        }}
      >
        <Pressable onPress={() => props.navigation.closeDrawer()}>
          <Ionicons
            style={{ left: 32 }}
            name="close"
            size={30}
            color={Color.white}
          />
        </Pressable>
        <View
          style={{
            height: 100,
            width: 100,
            alignSelf: 'center',
            backgroundColor: 'black',
            borderRadius: 50,
          }}
        />
        <View
          style={{
            paddingStart: 16,
          }}
        >
          <DrawerItem
            label="Lecafé"
            onPress={() => router.push('/menu')}
            labelStyle={{ color: Color.white }}
            icon={() => (
              <Ionicons name="female" size={24} color={Color.white} />
            )}
          />
          <DrawerItem
            label="Mensajes"
            onPress={() => router.push('/')}
            icon={() => (
              <Feather name="message-circle" size={24} color={Color.white} />
            )}
            labelStyle={{
              color: Color.white,
            }}
          />
          <DrawerItem
            label="Matches"
            onPress={() => router.push('/menu')}
            labelStyle={{ color: Color.white }}
            icon={() => <Feather name="heart" size={24} color={Color.white} />}
          />
          <DrawerItem
            label="Mi Perfil"
            onPress={() => router.push('/menu')}
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
            onPress={() => router.push('/menu')}
            labelStyle={{ color: Color.white }}
            icon={() => (
              <MaterialIcons name="smartphone" size={24} color={Color.white} />
            )}
          />
          <DrawerItem
            label="Ajustes"
            onPress={() => router.push('/menu')}
            labelStyle={{ color: Color.white }}
            icon={() => (
              <Feather name="settings" size={24} color={Color.white} />
            )}
          />
        </View>

        <DrawerItem
          label="Cerrar sesión"
          onPress={() => router.push('/menu')}
          labelStyle={{ color: Color.white }}
          style={{
            overflow: 'visible',
            paddingStart: 16,
            paddingEnd: 0,
          }}
          icon={() => (
            <SimpleLineIcons name="logout" size={24} color={Color.white} />
          )}
        />
      </DrawerContentScrollView>
    </GradientView>
  );
};
