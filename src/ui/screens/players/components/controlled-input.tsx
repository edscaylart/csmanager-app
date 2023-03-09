import { FormControl, Input } from 'native-base';
import { useController } from 'react-hook-form';

import { usePlayerForm } from '../player_provider';

type Props = {
  label: string;
  name: 'name' | 'username';
};

export function ControlledInput({ label, name }: Props) {
  const { control } = usePlayerForm();

  const { field, fieldState } = useController({ control, name });

  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={label}
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
