import BioScreen from '@screens/bio/BioScreen';
import { useLocalSearchParams } from 'expo-router';
import type { FilterStatus } from 'src/types/status';

export default function Bio() {
  const { userId, filterStatus } = useLocalSearchParams<{
    userId: string;
    filterStatus: FilterStatus;
  }>();
  return <BioScreen userId={userId} filterStatus={filterStatus} />;
}
