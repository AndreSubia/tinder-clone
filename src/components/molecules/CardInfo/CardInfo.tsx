import { ActionButton } from '@components/atoms/ActionButton/ActionButton';
import { Text } from '@components/atoms/Text/Text';
import { Color } from '@styles/colors';
import type { User } from 'src/types/data';
import { ActionButtons } from '../ActionButtons/ActionButtons';
import {
  Container,
  LocationContainer,
  MoreInfoButton,
  NameContainer,
} from './styles';

interface CardInfoProps {
  user: User;
  status?: 'like' | 'dislike' | 'superlike';
  onLike?: () => void;
  onDislike?: () => void;
  onSuperLike?: () => void;
  onOpenMoreInfo?: () => void;
}

export const CardInfo = ({
  user,
  status,
  onLike,
  onDislike,
  onSuperLike,
  onOpenMoreInfo,
}: CardInfoProps) => {
  return (
    <Container>
      <NameContainer>
        <Text variant="h5" color="white">
          {user.name}
        </Text>
        <Text variant="h5" color="white">
          {user.lastName},
        </Text>
        <Text variant="h5" color="white">
          {user.age}
        </Text>
      </NameContainer>
      <MoreInfoButton>
        <ActionButton
          size={40}
          iconName={'information-circle-outline'}
          backgroundColor={Color.red}
          iconColor={Color.white}
          onPress={onOpenMoreInfo}
        />
      </MoreInfoButton>
      <LocationContainer>
        <Text variant="caption" color="white">
          {user.district}, {user.country}
        </Text>
      </LocationContainer>
      <ActionButtons
        status={status}
        onDislike={onDislike}
        onLike={onLike}
        onSuperLike={onSuperLike}
      />
    </Container>
  );
};
