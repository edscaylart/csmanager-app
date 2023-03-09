import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import {
  Box,
  Button,
  FlatList,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  VStack,
} from 'native-base';

import { PatentImage, RANK_IMAGE } from '@/constants/rank-image';
import { Player } from '@/domain/models';

type Props = {
  players: Player[];
};

export function PlayersScreen({ players }: Props) {
  return (
    <FlatList
      data={players}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Box
          borderBottomWidth="1"
          borderColor="muted.800"
          pl={['0', '4']}
          pr={['0', '5']}
          py={2}>
          <HStack space={3} alignItems="center">
            <Image
              source={RANK_IMAGE[item.patent as unknown as PatentImage]}
              alt={item.patent}
              h={8}
              w={20}
              resizeMode="contain"
            />
            <VStack>
              <Text bold>{item.username}</Text>
              <Text fontSize="xs">{item.name}</Text>
            </VStack>
            <Spacer />
            <Link
              href={{
                pathname: '/(app)/player/[player]',
                params: {
                  player: item.id,
                  data: JSON.stringify(item),
                },
              }}
              asChild>
              <Button variant="unstyled">
                <Icon as={Feather} name="edit" color="white" />
              </Button>
            </Link>
          </HStack>
        </Box>
      )}
    />
  );
}
