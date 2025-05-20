import type { ImageSourcePropType } from 'react-native';
import { Text } from '../Text/Text';
import {
  BackgroundImage,
  ButtonContainer,
  Container,
  SelectedContainer,
  TextContainer,
} from './styles';

const RADIUS = 3;

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
      <SelectedContainer
        isPressed={isPressed}
        size={size}
        radius={RADIUS}
        onPress={onPress}
      />
      <ButtonContainer isPressed={isPressed} size={size}>
        <BackgroundImage
          source={backgroundImage}
          style={{ width: size * 0.6, height: size * 0.6 }}
          contentFit="cover"
        />
      </ButtonContainer>

      {isPressed && caption && (
        <TextContainer size={size} marginTop={RADIUS}>
          <Text variant="subNavBold">{caption}</Text>
        </TextContainer>
      )}
    </Container>
  );
};
