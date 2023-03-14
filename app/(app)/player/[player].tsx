import { AntDesign } from '@expo/vector-icons';
import { Link, Stack, useSearchParams } from 'expo-router';
import { Box, Icon, useTheme } from 'native-base';

import { RemoteUpsertPlayers } from '@/data/usecases';
import { Player } from '@/domain/models';
import {
  AddPlayerPresenter,
  EditPlayerPresenter,
} from '@/presentation/presenters';

export default function EditPlayer() {
  const { player, data } = useSearchParams();
  const theme = useTheme();

  const isNew = player === 'add';

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme.colors.coolGray[900],
          },
          headerTintColor: theme.colors.white,
          headerTitle: isNew ? 'Novo jogador' : 'Editar jogador',
          headerRight: () => (
            <Link href="../">
              <Icon as={AntDesign} name="close" color="white" />
            </Link>
          ),
        }}
      />
      <Box safeArea flex={1} bg="black">
        {isNew ? (
          <AddPlayerPresenter addPlayer={new RemoteUpsertPlayers()} />
        ) : (
          <EditPlayerPresenter
            player={JSON.parse(data as string) as Player}
            editPlayer={new RemoteUpsertPlayers()}
          />
        )}
      </Box>
    </>
  );
}
