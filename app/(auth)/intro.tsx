import { Stack } from 'expo-router';

import { IntroPresenter } from '@/presentation';

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <IntroPresenter />
    </>
  );
}
