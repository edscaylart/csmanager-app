import { Box, FormControl, Input } from 'native-base';
import { useController } from 'react-hook-form';

import { useProfileForm } from '../profile_provider';

export function NameInput() {
  const { control } = useProfileForm();

  const { field, fieldState } = useController({ control, name: 'name' });

  return (
    <FormControl>
      <FormControl.Label>Nome completo</FormControl.Label>
      <Input
        placeholder="Nome completo"
        value={field.value}
        onChangeText={field.onChange}
      />
      {fieldState.error ? (
        <FormControl.HelperText>
          {fieldState.error.message}
        </FormControl.HelperText>
      ) : null}
    </FormControl>
  );
}
