import { Button, VStack } from 'native-base';

import { SignInAdminForm } from './components';

export function SignInScreen() {
  return (
    <VStack safeArea flex={1} bg="black" p={4} space={4}>
      <Button.Group isAttached colorScheme="blue" mx={{ base: 'auto', md: 0 }}>
        <Button>Sou Admin</Button>
        <Button variant="outline">Sou Jogador</Button>
      </Button.Group>
      <SignInAdminForm />
    </VStack>
  );
}
