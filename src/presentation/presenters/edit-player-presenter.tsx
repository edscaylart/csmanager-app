import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Player } from '@/domain/models';
import { PlayersFormScreen } from '@/ui/screens';
import { PlayerFormProvider } from '@/ui/screens/players/player_provider';
import {
  PlayerFormType,
  PlayerSchema,
} from '@/ui/screens/players/player_schema';

type Props = {
  player: Player;
};

export function EditPlayerPresenter({ player: { id, ...player } }: Props) {
  const { control, handleSubmit, formState } = useForm<PlayerFormType>({
    resolver: zodResolver(PlayerSchema),
    defaultValues: player,
  });

  const handleEditPlayer = (data: PlayerFormType) => {};

  return (
    <PlayerFormProvider
      control={control}
      isSubmitting={formState.isSubmitting}
      onSubmit={handleSubmit(handleEditPlayer)}>
      <PlayersFormScreen />
    </PlayerFormProvider>
  );
}
