import { Text } from '@components/atoms/Text/Text';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Color } from '@styles/colors';
import { useNavigation } from 'expo-router';
import React from 'react';
import type { IconNames } from '../../../types/icons';
import { HeaderContainer, HeaderContent, TouchableIcon } from './styles';
interface HeaderProps {
  title?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftIcon?: IconNames;
  rightIcon?: IconNames;
}

export const Header = ({
  title,
  onLeftPress,
  onRightPress,
  leftIcon = 'menu-outline',
  rightIcon = 'filter-outline',
}: HeaderProps) => {
  const navigation = useNavigation();

  const handleOnPressLeft = () => {
    if (onLeftPress) {
      onLeftPress();
    } else {
      navigation.dispatch(DrawerActions.openDrawer());
    }
  };

  return (
    <HeaderContainer>
      <TouchableIcon onPress={handleOnPressLeft}>
        <Ionicons name={leftIcon} size={30} color={Color.white} />
      </TouchableIcon>

      <HeaderContent>
        <Text variant="h5">{title}</Text>
      </HeaderContent>

      <TouchableIcon onPress={onRightPress}>
        <Ionicons name={rightIcon} size={30} color={Color.white} />
      </TouchableIcon>
    </HeaderContainer>
  );
};
