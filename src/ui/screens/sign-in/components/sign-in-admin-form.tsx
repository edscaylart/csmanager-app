import { Button, VStack } from 'native-base';

import { EmailInput } from './email_input';
import { PasswordInput } from './password_input';
import { useSignInForm } from '../sign-in_provider';

export function SignInAdminForm() {
  const { onSubmit, isSubmitting } = useSignInForm();

  return (
    <VStack space={4}>
      <EmailInput />
      <PasswordInput />
      <Button isLoading={isSubmitting} onPress={onSubmit}>
        Entrar
      </Button>
    </VStack>
  );
}
