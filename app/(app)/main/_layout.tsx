import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useTheme } from 'native-base';

export default function AppLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.black,
        },
        headerTintColor: theme.colors.white,
        tabBarActiveTintColor: theme.colors.amber[400],
        tabBarStyle: {
          backgroundColor: theme.colors.black,
        },
      }}>
      <Tabs.Screen
        name="players"
        options={{
          href: '/(app)/main/players',
          tabBarLabel: 'Jogadores',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="groups" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          href: '/(app)/main/maps',
          tabBarLabel: 'Mapas',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="match-maker"
        options={{
          href: '/(app)/main/match-maker',
          tabBarLabel: 'Sorteios',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="desktop-mac" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: '/(app)/main/profile',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
