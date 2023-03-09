import { FormControl, HStack, Image } from 'native-base';
import { useController } from 'react-hook-form';

import { usePlayerForm } from '../player_provider';

import { PatentImage, RANK_IMAGE } from '@/constants';
import { PatentSelect } from '@/ui/components';

export function ControlledPatentSelect() {
  const { control } = usePlayerForm();

  const { field, fieldState } = useController({ control, name: 'patent' });

  return (
    <HStack alignItems="flex-end" space={4}>
      <FormControl flex={1}>
        <FormControl.Label>Jogo padrão</FormControl.Label>
        <PatentSelect
          value={field.value}
          placeholder="Patente (CS:GO)"
          onValueChange={field.onChange}
        />
        {fieldState.error ? (
          <FormControl.HelperText>
            {fieldState.error.message}
          </FormControl.HelperText>
        ) : null}
      </FormControl>
      {field.value ? (
        <Image
          source={RANK_IMAGE[field.value as unknown as PatentImage]}
          alt={field.value}
          h={8}
          w={20}
          resizeMode="contain"
        />
      ) : null}
    </HStack>
  );
}
