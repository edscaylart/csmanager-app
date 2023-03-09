// import { Stack } from 'expo-router';

import { AntDesign } from '@expo/vector-icons';
import { Link, Stack, useNavigation, useSearchParams } from 'expo-router';
import { Box, Icon, useTheme } from 'native-base';

import { Player } from '@/domain/models';
import { EditPlayerPresenter } from '@/presentation/presenters';

export default function EditPlayer() {
  const { data } = useSearchParams();
  const theme = useTheme();
  const navigation = useNavigation();
  // If the page was reloaded or navigated to directly, then the modal should be presented as``
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = navigation.canGoBack();

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: theme.colors.coolGray[900],
          },
          headerTintColor: theme.colors.white,
          headerTitle: 'Editar Jogador',
          headerRight: () => (
            <Link href="../">
              <Icon as={AntDesign} name="close" color="white" />
            </Link>
          ),
        }}
      />
      <Box safeArea flex={1} bg="black">
        {data ? (
          <EditPlayerPresenter player={JSON.parse(data as string) as Player} />
        ) : null}
      </Box>
    </>
  );
}
