import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from 'native-base';
import { useForm } from 'react-hook-form';

import { UpsertPlayers } from '@/domain/usecases';
import { usePlayerStore } from '@/store/player-store';
import { ToastBox } from '@/ui/components';
import { PlayersFormScreen } from '@/ui/screens';
import { PlayerFormProvider } from '@/ui/screens/players/player_provider';
import {
  PlayerFormType,
  PlayerSchema,
} from '@/ui/screens/players/player_schema';

type Props = {
  addPlayer: UpsertPlayers;
};

export function AddPlayerPresenter({ addPlayer }: Props) {
  const toast = useToast();
  const appendPlayer = usePlayerStore(state => state.appendPlayer);
  const { control, handleSubmit, formState } = useForm<PlayerFormType>({
    resolver: zodResolver(PlayerSchema),
    defaultValues: {
      active: true,
    },
  });

  const handleEditPlayer = (data: PlayerFormType) => {
    addPlayer
      .set(data)
      .then(newPlayer => {
        appendPlayer(newPlayer);
        toast.show({
          render: () => <ToastBox type="success">Jogador adicionado!</ToastBox>,
        });
      })
      .catch(error => {
        toast.show({
          render: () => <ToastBox type="error">{error.message}</ToastBox>,
        });
      });
  };

  return (
    <PlayerFormProvider
      control={control}
      isSubmitting={formState.isSubmitting}
      onSubmit={handleSubmit(handleEditPlayer)}>
      <PlayersFormScreen />
    </PlayerFormProvider>
  );
}
