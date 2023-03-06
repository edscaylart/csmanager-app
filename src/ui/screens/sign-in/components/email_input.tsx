import { Ionicons } from '@expo/vector-icons';
import { Icon, Input, InputGroup, InputLeftAddon } from 'native-base';
import { useController } from 'react-hook-form';

import { useSignInForm } from '../sign-in_provider';

export function EmailInput() {
  const { control } = useSignInForm();

  const { field } = useController({ control, name: 'email' });

  return (
    <InputGroup>
      <InputLeftAddon
        children={<Icon as={Ionicons} name="person" color="white" />}
      />
      <Input
        flex={1}
        placeholder="E-mail"
        autoCapitalize="none"
        keyboardType="email-address"
        value={field.value}
        onChangeText={field.onChange}
      />
    </InputGroup>
  );
}
