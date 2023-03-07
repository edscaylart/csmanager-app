import { Image, VStack, Text, Center, Button, Box } from 'native-base';

import logoImg from '@/assets/images/logo.png';

type Props = {
  onSignUpNavigate: () => void;
  onSignInNavigate: () => void;
};

export function IntroScreen({ onSignUpNavigate, onSignInNavigate }: Props) {
  return (
    <VStack
      safeArea
      flex={1}
      space={5}
      px={4}
      py={10}
      bg="black"
      justifyContent="space-between">
      <Center>
        <Image source={logoImg} alt="cs-manager" />
      </Center>
      <Box>
        <Text fontSize="4xl" lineHeight="md">
          <Text bold>Gerencie</Text> suas partidas com amigos de forma prática
        </Text>
        <VStack space={4} mt={8}>
          <Button variant="csOutline" onPress={onSignUpNavigate}>
            Registrar
          </Button>
          <Button onPress={onSignInNavigate}>Já tenho conta</Button>
        </VStack>
      </Box>
    </VStack>
  );
}
