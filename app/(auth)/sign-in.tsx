import { Stack } from 'expo-router';

import { SignInPresenter } from '@/presentation/presenters';

export default function SignIn() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SignInPresenter />
    </>
  );
}
