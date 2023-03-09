import { Button, VStack } from 'native-base';

import {
  ActiveCheckbox,
  ControlledInput,
  ControlledPatentSelect,
} from './components';
import { usePlayerForm } from './player_provider';

export function PlayersFormScreen() {
  const { onSubmit, isSubmitting } = usePlayerForm();

  return (
    <VStack space={4} px={5}>
      <ControlledInput name="name" label="Nome completo" />
      <ControlledInput name="username" label="Nome de usuário na Steam" />
      <ControlledPatentSelect />
      <ActiveCheckbox />
      <Button isLoading={isSubmitting} onPress={onSubmit}>
        Salvar
      </Button>
    </VStack>
  );
}
