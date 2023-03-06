import { Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';

import { Provider } from '@/auth/provider';
import { useCacheResources } from '@/hooks/use-cache-resources';
import { theme } from '@/styles/theme';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};

export default function App() {
  useCacheResources();

  return (
    <NativeBaseProvider theme={theme}>
      <Provider>
        <Stack />
      </Provider>
    </NativeBaseProvider>
  );
}
