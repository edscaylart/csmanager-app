import { Stack } from 'expo-router';

import { RemoteLoadPlayers } from '@/data/usecases';
import { PlayersPresenter } from '@/presentation/presenters';

export default function Players() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Jogadores' }} />
      <PlayersPresenter loadPlayers={new RemoteLoadPlayers()} />
    </>
  );
}
