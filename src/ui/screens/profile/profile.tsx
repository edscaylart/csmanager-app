import { AlertDialog, Button, VStack } from 'native-base';
import React, { useRef, useState } from 'react';

import { GamesSelect, NameInput } from './components';
import { useProfileForm } from './profile_provider';

type Props = {
  onExitPress: () => void;
};

export function ProfileScreen({ onExitPress }: Props) {
  const { onSubmit, isSubmitting } = useProfileForm();

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const onConfirm = () => {
    onExitPress();
    onClose();
  };

  const cancelRef = useRef(null);

  return (
    <VStack flex={1} p={5} pb={10} bg="black" justifyContent="space-between">
      <VStack space={4}>
        <NameInput />
        <GamesSelect />
        <Button mt={4} isLoading={isSubmitting} onPress={onSubmit}>
          Atualizar informações
        </Button>
      </VStack>
      <Button variant="csOutline" onPress={() => setIsOpen(!isOpen)}>
        Sair
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Sair da conta</AlertDialog.Header>
          <AlertDialog.Body>
            Tem certeza que deseja sair desta conta?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}>
                Cancelar
              </Button>
              <Button colorScheme="danger" onPress={onConfirm}>
                Sim, sair
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </VStack>
  );
}
