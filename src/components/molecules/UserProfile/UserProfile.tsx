import { Avatar } from '@components/atoms/Avatar/Avatar';
import { Text } from '@components/atoms/Text/Text';
import type { AvatarSize } from 'src/types/avatar';
import type { User } from 'src/types/data';
import { Container, InfoContainer, NameAgeContainer } from './styles';

interface UserProfileProps {
  user: User;
  avatarSize?: AvatarSize;
}

export const UserProfile = ({
  user,
  avatarSize = 'medium',
}: UserProfileProps) => {
  return (
    <Container>
      <Avatar user={user} size={avatarSize} />
      <InfoContainer>
        <NameAgeContainer>
          <Text variant="h5" color="white">
            {user.name},
          </Text>
          <Text variant="h5" color="white">
            {user.age}
          </Text>
        </NameAgeContainer>
        {user.district && (
          <Text variant="body" color="white">
            {user.district}
          </Text>
        )}
      </InfoContainer>
    </Container>
  );
};
