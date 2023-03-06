import { Stack } from 'expo-router';

import { IntroPresenter } from '@/presentation/presenters';

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <IntroPresenter />
    </>
  );
}
