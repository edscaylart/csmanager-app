import { Stack } from 'expo-router';

import { RegisterPresenter } from '@/presentation/presenters';

export default function Register() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <RegisterPresenter />
    </>
  );
}
