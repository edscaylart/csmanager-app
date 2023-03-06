import { Ionicons } from '@expo/vector-icons';
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
} from 'native-base';

export function SignInAdminForm() {
  return (
    <VStack space={4}>
      <InputGroup>
        <InputLeftAddon
          children={<Icon as={Ionicons} name="person" color="white" />}
        />
        <Input flex={1} placeholder="E-mail" />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon
          children={
            <Icon as={Ionicons} name="md-lock-closed-outline" color="white" />
          }
        />
        <Input flex={1} type="password" placeholder="Senha" />
      </InputGroup>
      <Button>Entrar</Button>
    </VStack>
  );
}
