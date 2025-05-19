import type { ImageSourcePropType } from 'react-native';
import { Text } from '../Text/Text';
import {
  BackgroundImage,
  ButtonContainer,
  Container,
  TextContainer,
} from './styles';

interface FilterButtonComponentProps {
  size?: number;
  backgroundImage: ImageSourcePropType;
  onPress?: () => void;
  isPressed?: boolean;
  caption?: string;
}

export const FilterButton = ({
  size = 60,
  backgroundImage,
  onPress,
  isPressed,
  caption,
}: FilterButtonComponentProps) => {
  return (
    <Container>
      <ButtonContainer isPressed={isPressed} size={size} onPress={onPress}>
        <BackgroundImage
          source={backgroundImage}
          style={{ width: size * 0.6, height: size * 0.6 }}
          contentFit="cover"
        />
      </ButtonContainer>
      {isPressed && caption && (
        <TextContainer size={size}>
          <Text variant="subNavBold">{caption}</Text>
        </TextContainer>
      )}
    </Container>
  );
};
