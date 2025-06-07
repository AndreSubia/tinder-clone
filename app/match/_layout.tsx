import { Stack } from 'expo-router';
import { View } from 'react-native';

const MatchLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="[matchId]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};

export default MatchLayout;
