import { Text } from '@components/atoms/Text/Text';
import type { ReactNode } from 'react';
import { View } from 'react-native';
import { BadgeContainer } from './styles';

export const Badge = ({
  icon: Icon,
  count = 0,
}: {
  icon: ReactNode;
  count?: number;
}) => (
  <View style={{ position: 'relative' }}>
    {Icon}
    {count > 0 && (
      <BadgeContainer size={16}>
        <Text variant={count > 10 ? 'captionSmall' : 'caption'}>
          {count > 99 ? '+99' : count}
        </Text>
      </BadgeContainer>
    )}
  </View>
);
