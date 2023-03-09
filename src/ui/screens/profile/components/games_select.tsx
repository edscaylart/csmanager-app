import { FormControl } from 'native-base';
import { useController } from 'react-hook-form';

import { useProfileForm } from '../profile_provider';

import { GameSelect } from '@/ui/components';

export function GamesSelect() {
  const { control } = useProfileForm();

  const { field, fieldState } = useController({ control, name: 'gameType' });

  return (
    <FormControl>
      <FormControl.Label>Jogo padrão</FormControl.Label>
      <GameSelect
        value={field.value}
        placeholder="Escolha o jogo padrão"
        onValueChange={field.onChange}
      />
      {fieldState.error ? (
        <FormControl.HelperText>
          {fieldState.error.message}
        </FormControl.HelperText>
      ) : null}
    </FormControl>
  );
}
