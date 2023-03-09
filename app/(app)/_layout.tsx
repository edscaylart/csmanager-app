import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="main"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="player/[player]"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: 'containedModal',
        }}
      />
    </Stack>
  );
}
