import { Asset } from 'expo-asset';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';

function cacheImages(images: any[]) {
  return images.map(image => {
    if (typeof image === 'string') {
      Image.prefetch(image);
    } else {
      Asset.fromModule(image).downloadAsync();
    }
    return Promise.resolve();
  });
}

export function useCacheResources() {
  const [loadingComplete, setLoadingCompleted] = useState(false);

  const bootstrapAsync = async () => {
    const imageAssets = cacheImages([
      require('../assets/images/admin.png'),
      require('../assets/images/logo.png'),
      require('../assets/images/player.png'),
    ]);

    await Promise.all([...imageAssets]);

    setLoadingCompleted(true);
  };

  useEffect(() => {
    bootstrapAsync();
  }, []);

  return { loadingComplete };
}
