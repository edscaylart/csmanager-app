import { Checkbox, FormControl, Input } from 'native-base';
import { useController } from 'react-hook-form';

import { usePlayerForm } from '../player_provider';

export function ActiveCheckbox() {
  const { control } = usePlayerForm();

  const { field } = useController({ control, name: 'active' });

  return (
    <Checkbox
      value="true"
      isChecked={field.value}
      my={2}
      onChange={field.onChange}>
      Ativo
    </Checkbox>
  );
}
