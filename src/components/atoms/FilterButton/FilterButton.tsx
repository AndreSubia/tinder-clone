import type { ImageSourcePropType } from 'react-native';
import { BackgroundImage, ButtonContainer } from './style';

interface FilterButtonComponentProps {
  size?: number;
  backgroundImage: ImageSourcePropType;
  onPress?: () => void;
  isPressed?: boolean;
}

export const FilteredButton = ({
  size = 60,
  backgroundImage,
  onPress,
  isPressed,
}: FilterButtonComponentProps) => {
  return (
    <ButtonContainer isPressed={isPressed} size={size} onPress={onPress}>
      <BackgroundImage
        source={backgroundImage}
        style={{ width: size * 0.6, height: size * 0.6 }}
        contentFit="cover"
      />
    </ButtonContainer>
  );
};
