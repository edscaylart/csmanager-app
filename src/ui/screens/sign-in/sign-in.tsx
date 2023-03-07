import { Center } from 'native-base';

import { SignInAdminForm } from './components';

export function SignInScreen() {
  return (
    <Center safeArea flex={1} bg="black" p={4}>
      <SignInAdminForm />
    </Center>
  );
}
