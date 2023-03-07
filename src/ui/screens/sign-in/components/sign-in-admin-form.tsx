import { Button, Center, Image, VStack } from 'native-base';

import { EmailInput } from './email_input';
import { PasswordInput } from './password_input';
import { useSignInForm } from '../sign-in_provider';

import adminImg from '@/assets/images/admin.png';

export function SignInAdminForm() {
  const { onSubmit, isSubmitting } = useSignInForm();

  return (
    <VStack space={4} w="full">
      <Center>
        <Image source={adminImg} size="2xl" alt="cs-manager-admin" />
      </Center>
      <EmailInput />
      <PasswordInput />
      <VStack space={4} mt={6}>
        <Button isLoading={isSubmitting} onPress={onSubmit}>
          Entrar
        </Button>
        <Button variant="csOutline" isLoading={isSubmitting}>
          Registrar
        </Button>
      </VStack>
    </VStack>
  );
}
