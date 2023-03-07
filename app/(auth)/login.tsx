import { Stack } from 'expo-router';

import { LoginPresenter } from '@/presentation/presenters';

export default function Login() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <LoginPresenter />
    </>
  );
}
