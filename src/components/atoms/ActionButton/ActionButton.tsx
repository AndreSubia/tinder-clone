import { Ionicons } from '@expo/vector-icons';
import { Color } from '@styles/colors';
import { TouchableOpacity } from 'react-native';
import type { IconNames } from 'src/types/icons';
import { ActionButtonContainer, ActionButtonGradientContainer } from './style';

interface ActionButtonsProps {
  isPressed?: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  backgroundColorEnd?: string;
  iconColor?: string;
  iconName?: IconNames;
  size?: number;
  iconSize?: number;
  disabled?: boolean;
  elevated?: boolean;
}

export const ActionButton = ({
  isPressed,
  onPress,
  backgroundColor = Color.white,
  backgroundColorEnd,
  iconColor,
  iconName,
  size = 60,
  iconSize = 30,
  disabled,
  elevated,
}: ActionButtonsProps) => {
  if (backgroundColorEnd) {
    return (
      <TouchableOpacity onPress={onPress}>
        <ActionButtonGradientContainer
          colors={[backgroundColor, backgroundColorEnd]}
          locations={[0, 0.9]}
          start={{ x: 0, y: 0.2 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
          size={size}
          isPressed={isPressed}
          backgroundColor={backgroundColor}
          elevation={elevated}
        >
          <Ionicons
            name={iconName}
            size={iconSize}
            color={iconColor ?? Color.white}
          />
        </ActionButtonGradientContainer>
      </TouchableOpacity>
    );
  }

  return (
    <ActionButtonContainer
      disabled={disabled}
      size={size}
      isPressed={isPressed}
      backgroundColor={backgroundColor}
      onPress={onPress}
      elevation={elevated}
    >
      <Ionicons
        name={iconName}
        size={iconSize}
        color={iconColor ?? Color.white}
      />
    </ActionButtonContainer>
  );
};
