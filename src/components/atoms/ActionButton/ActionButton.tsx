import { Ionicons } from '@expo/vector-icons';
import { Color } from '@styles/colors';
import type { IconNames } from 'src/types/icons';
import { ActionButtonContainer } from './style';

interface ActionButtonsProps {
  isPressed?: boolean;
  onPress?: () => void;
  backgroundColor?: string;
  iconColor?: string;
  iconName?: IconNames;
  size?: number;
  iconSize?: number;
  disabled?: boolean;
}

export const ActionButton = ({
  isPressed,
  onPress,
  backgroundColor,
  iconColor,
  iconName,
  size = 60,
  iconSize = 30,
  disabled,
}: ActionButtonsProps) => {
  return (
    <ActionButtonContainer
      disabled={disabled}
      size={size}
      isPressed={isPressed}
      backgroundColor={backgroundColor}
      onPress={onPress}
    >
      <Ionicons
        name={iconName}
        size={iconSize}
        color={iconColor ?? Color.white}
      />
    </ActionButtonContainer>
  );
};
