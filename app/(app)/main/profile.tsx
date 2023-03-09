import { Stack } from 'expo-router';

import { ProfilePresenter } from '@/presentation/presenters';

export default function Profile() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Meu Perfil' }} />
      <ProfilePresenter />
    </>
  );
}
