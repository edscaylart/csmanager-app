import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
          tabBarLabel: 'Jogadores',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="groups" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          href: '/maps',
          tabBarLabel: 'Mapas',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="match-maker"
        options={{
          href: '/match-maker',
          tabBarLabel: 'Sorteios',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="desktop-mac" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          href: '/profile',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
