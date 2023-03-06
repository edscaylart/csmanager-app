import { Image, VStack, Text, Center, Button } from 'native-base';

import adminImg from '@/assets/images/admin.png';
import logoImg from '@/assets/images/logo.png';

type Props = {
  onSignUpNavigate: () => void;
  onSignInNavigate: () => void;
};

export function IntroScreen({ onSignUpNavigate, onSignInNavigate }: Props) {
  return (
    <VStack safeArea flex={1} bg="black" p={4} space={5}>
      <Center>
        <Image source={logoImg} alt="cs-manager" />
      </Center>
      <Center>
        <Image source={adminImg} size="2xl" alt="cs-manager-admin" />
      </Center>
      <Text fontSize="4xl" lineHeight="md">
        <Text bold>Gerencie</Text> suas partidas de forma prática
      </Text>
      <VStack space={4}>
        <Button variant="outline" onPress={onSignUpNavigate}>
          Registrar
        </Button>
        <Button onPress={onSignInNavigate}>Já tenho conta</Button>
      </VStack>
    </VStack>
  );
}
