import { Ionicons } from '@expo/vector-icons';
import {
  FormControl,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
} from 'native-base';
import { useController } from 'react-hook-form';

import { useSignInForm } from '../sign-in_provider';

export function PasswordInput() {
  const { control } = useSignInForm();

  const { field, fieldState } = useController({ control, name: 'password' });

  return (
    <FormControl>
      <InputGroup>
        <InputLeftAddon
          children={
            <Icon as={Ionicons} name="md-lock-closed-outline" color="white" />
          }
        />
        <Input
          flex={1}
          type="password"
          placeholder="Senha"
          autoCapitalize="none"
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
