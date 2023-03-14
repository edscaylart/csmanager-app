import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from 'native-base';
import { useForm } from 'react-hook-form';

import { Player } from '@/domain/models';
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
  player: Player;
  editPlayer: UpsertPlayers;
};

export function EditPlayerPresenter({
  player: { id, ...player },
  editPlayer,
}: Props) {
  const toast = useToast();
  const setPlayer = usePlayerStore(state => state.setPlayer);
  const { control, handleSubmit, formState } = useForm<PlayerFormType>({
    resolver: zodResolver(PlayerSchema),
    defaultValues: player,
  });

  const handleEditPlayer = (data: PlayerFormType) => {
    editPlayer
      .set({ ...data, id })
      .then(updatedPlayer => {
        setPlayer(updatedPlayer);
        toast.show({
          render: () => <ToastBox type="success">Jogador atualizado!</ToastBox>,
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
