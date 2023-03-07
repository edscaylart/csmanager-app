import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';
// This is the entry point for the Expo app.
// It is responsible for setting up the router, root component and loading pages.
// import 'expo-router/entry';

import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
