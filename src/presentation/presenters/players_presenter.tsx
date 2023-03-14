import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Box, Fab, Icon, useToast } from 'native-base';
import { useEffect, useState } from 'react';

import { LoadPlayers } from '@/domain/usecases';
import { usePlayerStore } from '@/store/player-store';
import { ToastBox } from '@/ui/components';
import { PlayersScreen } from '@/ui/screens';

type Props = {
  loadPlayers: LoadPlayers;
};

export function PlayersPresenter({ loadPlayers }: Props) {
  const toast = useToast();
  const router = useRouter();

  const players = usePlayerStore(state => state.players);

  useEffect(() => {
    loadPlayers
      .list()
      .then(result => usePlayerStore.setState({ players: result }))
      .catch(error => {
        toast.show({
          render: () => <ToastBox type="error">{error.message}</ToastBox>,
        });
      });
  }, []);

  return (
    <Box safeArea flex={1} px={4} bg="black">
      <PlayersScreen players={players} />
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        label="Novo jogador"
        icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}
        onPress={() => router.push('/player/add')}
      />
    </Box>
  );
}
