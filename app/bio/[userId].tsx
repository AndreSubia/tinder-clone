import BioScreen from '@screens/bio/BioScreen';
import { useLocalSearchParams } from 'expo-router';

export default function Bio() {
  const { userId } = useLocalSearchParams<{ userId: string }>();
  return <BioScreen userId={userId} />;
}
