import { Button, VStack } from 'native-base';

import { GamesSelect, NameInput } from './components';
import { useProfileForm } from './profile_provider';

type Props = {
  onExitPress: () => void;
};

export function ProfileScreen({ onExitPress }: Props) {
  const { onSubmit, isSubmitting } = useProfileForm();

  return (
    <VStack flex={1} p={5} pb={10} bg="black" justifyContent="space-between">
      <VStack space={4}>
        <NameInput />
        <GamesSelect />
        <Button mt={4} isLoading={isSubmitting} onPress={onSubmit}>
          Atualizar informações
        </Button>
      </VStack>
      <Button variant="csOutline" onPress={onExitPress}>
        Sair
      </Button>
    </VStack>
  );
}
