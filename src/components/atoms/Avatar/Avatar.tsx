import { Color } from '@styles/colors';
import type { User } from 'src/data/users';
import type { AvatarShape, AvatarSize } from 'src/types/avatar';
import { AvatarContainer, AvatarImage } from './styles';

interface AvatarProps {
  user: User;
  shape?: AvatarShape;
  size?: AvatarSize;
  fallbackColor?: string;
}

export const Avatar = ({
  user,
  shape = 'circle',
  size = 'medium',
  fallbackColor = Color.white,
}: AvatarProps) => {
  return (
    <AvatarContainer shape={shape} size={size} fallbackColor={fallbackColor}>
      {user.picture_url ? (
        <AvatarImage source={user.picture_url} contentFit="cover" />
      ) : null}
    </AvatarContainer>
  );
};
