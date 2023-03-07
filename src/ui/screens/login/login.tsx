import { Center } from 'native-base';

import { LoginAdminForm } from './components';

export function LoginScreen() {
  return (
    <Center safeArea flex={1} bg="black" p={4}>
      <LoginAdminForm />
    </Center>
  );
}
