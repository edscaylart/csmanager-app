import { FormControl, Input, Select } from 'native-base';
import { useController } from 'react-hook-form';

import { useProfileForm } from '../profile_provider';

import { useStore } from '@/store';

export function GamesSelect() {
  const { control } = useProfileForm();
  const gamesType = useStore(state => state.gamesType);

  const { field, fieldState } = useController({ control, name: 'gameType' });

  return (
    <FormControl>
      <FormControl.Label>Jogo padrão</FormControl.Label>
      <Select
        selectedValue={field.value}
        accessibilityLabel="Escolha o jogo padrão"
        placeholder="Escolha o jogo padrão"
        onValueChange={field.onChange}>
        {gamesType.map(game => (
          <Select.Item key={game.value} label={game.text} value={game.value} />
        ))}
      </Select>
      {fieldState.error ? (
        <FormControl.HelperText>
          {fieldState.error.message}
        </FormControl.HelperText>
      ) : null}
    </FormControl>
  );
}
