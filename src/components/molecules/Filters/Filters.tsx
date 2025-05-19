import { FilterButton } from '@components/atoms/FilterButton/FilterButton';
import type { FilterStatus } from 'src/types/status';
import { ButtonContainer, FiltersContainer } from './styles';

interface ActionButtonsProps {
  status?: FilterStatus;
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
        <FilterButton
          isPressed={status === 'friendship'}
          onPress={onFriendship}
          backgroundImage={require('../../../../assets/png/friend.png')}
          caption="Amistad"
        />
      </ButtonContainer>
      <ButtonContainer>
        <FilterButton
          isPressed={status === 'dating'}
          onPress={onDating}
          backgroundImage={require('../../../../assets/png/dating.png')}
          caption="Citas"
        />
      </ButtonContainer>
      <ButtonContainer>
        <FilterButton
          isPressed={status === 'relationship'}
          onPress={onRelationship}
          backgroundImage={require('../../../../assets/png/relationship.png')}
          caption="Relación"
        />
      </ButtonContainer>
    </FiltersContainer>
  );
};
