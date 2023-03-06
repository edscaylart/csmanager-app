import { Stack } from 'expo-router';

import { SignInPresenter } from '@/presentation';

export default function SignIn() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SignInPresenter />
    </>
  );
}
