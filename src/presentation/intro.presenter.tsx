import { useRouter } from 'expo-router';

import { Intro } from '@/ui/intro/intro';

export function IntroPresenter() {
  const router = useRouter();

  return (
    <Intro
      onSignInNavigate={() => router.push('/sign-in')}
      onSignUpNavigate={() => router.push('/sign-up')}
    />
  );
}
