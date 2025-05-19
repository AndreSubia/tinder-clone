import { Color } from '@styles/colors';
import { Image } from 'expo-image';
import styled from 'styled-components/native';

export const CardImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
`;

export const SuperLikeButton = styled.TouchableOpacity`
  border-width: 5px;
  border-color: ${Color.white};
  padding: 15px;
  border-radius: 20px;
  align-items: center;
`;

export const FiltersContainer = styled.View`
  position: absolute;
  width: 100%;
  top: 32px;
`;

export const CardInfoContainer = styled.View`
  position: absolute;
  width: 100%;
  padding-horizontal: 32px;
  bottom: 32px;
`;
