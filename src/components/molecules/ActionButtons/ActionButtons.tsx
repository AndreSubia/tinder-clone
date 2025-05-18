import { ActionButton } from '@components/atoms/ActionButton/ActionButton';
import { Ionicons } from '@expo/vector-icons';
import { Color } from '@styles/colors';
import { ActionsContainer } from './styles';

interface ActionButtonsProps {
  status?: 'like' | 'dislike' | 'superlike';
  onLike?: () => void;
  onDislike?: () => void;
  onSuperLike?: () => void;
}

export const ActionButtons = ({
  status,
  onLike,
  onDislike,
  onSuperLike,
}: ActionButtonsProps) => {
  return (
    <ActionsContainer>
      <ActionButton
        isPressed={status === 'dislike'}
        iconName={'close'}
        backgroundColor={Color.dust}
        onPress={onDislike}
      />
      <ActionButton
        isPressed={status === 'superlike'}
        iconName={'heart'}
        backgroundColor={Color.white}
        iconColor={status === 'superlike' ? Color.white : Color.red}
        onPress={onSuperLike}
      />
      <ActionButton
        isPressed={status === 'like'}
        iconName={'checkmark-sharp'}
        backgroundColor={Color.pinkLight}
        onPress={onLike}
      />
    </ActionsContainer>
  );
};
