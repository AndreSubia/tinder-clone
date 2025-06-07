import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View<{ width: number }>`
  position: absolute;
  width: ${({ width }) => width}px;
  top: 0;
  z-index: 99;
`;

export const ContentContainer = styled.View`
  padding-top: 40px;
  padding-bottom: ${() => {
    const insets = useSafeAreaInsets();
    return `${insets.bottom + 16}px`;
  }};
  padding-horizontal: 32px;
  justify-content: space-between;
  flex: 1;
`;

export const UserInfoContainer = styled.View`
  height: 70px;
  z-index: 99;
`;

export const InterestsContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  overflow: hidden;
`;

export const SectionContainer = styled.View`
  gap: 12px;
`;

export const ChipsContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ActionButtonsContainer = styled.View`
  width: 256px;
  align-self: center;
  padding-bottom: 2px;
`;
