import { Badge } from '@components/atoms/Badge/Badge';
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
} from '@react-navigation/drawer';
import { Color } from '@styles/colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { userProfile } from 'src/data/data';
import {
  HeaderContainer,
  LogoutDrawerItem,
  MenuContainer,
  MenuItemsContainer,
  StyledDrawerItem,
} from './styles';

const menuItems = [
  {
    label: 'Lecafé',
    icon: () => <Ionicons name="female" size={24} color={Color.white} />,
  },
  {
    label: 'Mensajes',
    icon: () => (
      <Badge
        count={2}
        icon={<Feather name="message-circle" size={24} color={Color.white} />}
      />
    ),
  },
  {
    label: 'Matches',
    icon: () => <Feather name="heart" size={24} color={Color.white} />,
  },
  {
    label: 'Mi Perfil',
    icon: () => (
      <MaterialCommunityIcons
        name="account-outline"
        size={24}
        color={Color.white}
      />
    ),
  },
  {
    label: 'Tutorial',
    icon: () => (
      <MaterialIcons name="smartphone" size={24} color={Color.white} />
    ),
  },
  {
    label: 'Ajustes',
    icon: () => <Feather name="settings" size={24} color={Color.white} />,
  },
];

const DrawerContent = (props: DrawerContentComponentProps) => {
  const router = useRouter();

  const handleNavigation = () => router.replace('/');

  return (
    <GradientView>
      <HeaderContainer>
        <CloseButton
          style={{ left: 32 }}
          onPress={() => props.navigation.closeDrawer()}
        />
        <UserProfile user={userProfile} avatarSize="medium" />
      </HeaderContainer>

      <DrawerContentScrollView
        contentContainerStyle={{
          paddingStart: 0,
          paddingEnd: 0,
          flex: 1,
          paddingTop: 0,
        }}
      >
        <MenuContainer>
          <MenuItemsContainer>
            {menuItems.map((item) => (
              <StyledDrawerItem
                key={item.label}
                label={item.label}
                onPress={handleNavigation}
                icon={item.icon}
              />
            ))}
          </MenuItemsContainer>
        </MenuContainer>
      </DrawerContentScrollView>

      <LogoutDrawerItem
        label="Cerrar sesión"
        onPress={handleNavigation}
        icon={() => (
          <SimpleLineIcons name="logout" size={24} color={Color.white} />
        )}
      />
    </GradientView>
  );
};

export default DrawerContent;
