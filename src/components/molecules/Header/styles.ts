import { useDrawerStatus } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 32px;
  padding-bottom: 16px;
  padding-top: ${() => {
    const insets = useSafeAreaInsets();
    return `${insets.top + 16}px`;
  }};
`;

export const HeaderContent = styled.View`
  flex: 1;
  align-items: center;
`;

export const TouchableIcon = styled.TouchableOpacity`
  opacity: ${() => {
    const isDrawerOpen = useDrawerStatus() === 'open';
    return isDrawerOpen ? 0 : 1;
  }};
  justify-content: center;
  align-items: center;
`;
