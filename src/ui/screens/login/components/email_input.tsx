import { Ionicons } from '@expo/vector-icons';
import {
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
} from 'native-base';
import { useController } from 'react-hook-form';

import { useSignInForm } from '../login_provider';

export function EmailInput() {
  const { control } = useSignInForm();

  const { field, fieldState } = useController({ control, name: 'email' });

  return (
    <FormControl>
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
      {fieldState.error ? (
        <FormControl.HelperText>
          {fieldState.error.message}
        </FormControl.HelperText>
      ) : null}
    </FormControl>
  );
}
