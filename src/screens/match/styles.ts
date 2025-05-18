import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: flex-end;
`;

export const ContentContainer = styled(SafeAreaView)<{ height: number }>`
  height: ${({ height }) => height * 0.55}px;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 36px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
`;

export const TextContainer = styled.View`
  margin-top: 16px;
  gap: 4px;
  align-items: center;
`;
