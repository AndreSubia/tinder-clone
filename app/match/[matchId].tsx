import MatchScreen from '@screens/match/MatchScreen';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

export default function Match() {
  const { matchId } = useLocalSearchParams<{ matchId: string }>();

  return <MatchScreen matchId={matchId} />;
}
