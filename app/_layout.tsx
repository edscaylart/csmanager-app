import { Slot, SplashScreen } from 'expo-router';
import { NativeBaseProvider } from 'native-base';

import { Provider } from '@/auth/provider';
import { useCacheResources } from '@/hooks/use-cache-resources';
import { theme } from '@/styles/theme';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};

export default function App() {
  const { isReady } = useCacheResources();

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Provider>
        <Slot />
      </Provider>
    </NativeBaseProvider>
  );
}
