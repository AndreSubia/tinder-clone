import { DrawerItem } from '@react-navigation/drawer';
import { Color } from '@styles/colors';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const HeaderContainer = styled(View)`
  margin-top: ${() => {
    const insets = useSafeAreaInsets();
    return insets.top + 16;
  }}px;
  gap: 16px;
`;

export const MenuContainer = styled(View)`
  flex: 1;
  justify-content: space-between;
`;

export const MenuItemsContainer = styled(View)`
  padding-start: 16px;
  margin-right: -16px;
`;

export const StyledDrawerItem = styled(DrawerItem).attrs({
  pressColor: 'transparent',
  labelStyle: { color: Color.white },
})``;

export const LogoutDrawerItem = styled(DrawerItem).attrs({
  pressColor: 'transparent',
  labelStyle: { color: Color.white },
})`
  padding-start: 16px;
  margin-right: -16px;
  margin-top: 32px;
  margin-bottom: ${() => {
    const insets = useSafeAreaInsets();
    return insets.bottom + 32;
  }}px;
`;

export const ScrollViewContent = styled.View`
  padding-start: 0;
  padding-end: 0;
  flex: 1;
  padding-top: 0;
`;
