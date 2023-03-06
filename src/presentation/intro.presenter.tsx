import { useRouter } from 'expo-router';

import { IntroScreen } from '@/ui/screens';

export function IntroPresenter() {
  const router = useRouter();

  return (
    <IntroScreen
      onSignInNavigate={() => router.push('/sign-in')}
      onSignUpNavigate={() => router.push('/sign-up')}
    />
  );
}
