import { useRouter } from 'expo-router';

import { IntroScreen } from '@/ui/screens';

export function IntroPresenter() {
  const router = useRouter();

  return (
    <IntroScreen
      onSignInNavigate={() => router.push('/login')}
      onSignUpNavigate={() => router.push('/register')}
    />
  );
}
