import { Stack } from 'expo-router';
import { View } from 'react-native';

const UserLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="[userId]"
          options={{
            headerShown: false,
            animation: 'fade_from_bottom',
          }}
        />
      </Stack>
    </View>
  );
};

export default UserLayout;
