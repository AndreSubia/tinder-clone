import { ActionButton } from '@components/atoms/ActionButton/ActionButton';
import { FilteredButton } from '@components/atoms/FilterButton/FilterButton';
import { Text } from '@components/atoms/Text/Text';
import { Color } from '@styles/colors';
import { ButtonContainer, FiltersContainer } from './styles';

interface ActionButtonsProps {
  status?: 'friendship' | 'dating' | 'relationship';
  onFriendship?: () => void;
  onDating?: () => void;
  onRelationship?: () => void;
}

export const Filters = ({
  status,
  onFriendship,
  onDating,
  onRelationship,
}: ActionButtonsProps) => {
  return (
    <FiltersContainer>
      <ButtonContainer>
        <FilteredButton
          isPressed={status === 'friendship'}
          onPress={onFriendship}
          backgroundImage={require('../../../../assets/png/friend.png')}
        />
        <Text variant="subNavBold">Amistad</Text>
      </ButtonContainer>
      <ButtonContainer>
        <FilteredButton
          isPressed={status === 'dating'}
          onPress={onDating}
          backgroundImage={require('../../../../assets/png/dating.png')}
        />
        <Text variant="subNavBold">Citas</Text>
      </ButtonContainer>
      <ButtonContainer>
        <FilteredButton
          isPressed={status === 'relationship'}
          onPress={onRelationship}
          backgroundImage={require('../../../../assets/png/relationship.png')}
        />

        <Text variant="subNavBold">Relación</Text>
      </ButtonContainer>
    </FiltersContainer>
  );
};
