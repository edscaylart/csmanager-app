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
  const [isReady, setIsReady] = useState(false);

  const bootstrapAsync = async () => {
    const imageAssets = cacheImages([
      require('../assets/images/admin.png'),
      require('../assets/images/logo.png'),
      require('../assets/images/player.png'),
      require('../assets/cs-go/competitive/dmg.png'),
      require('../assets/cs-go/competitive/expired.png'),
      require('../assets/cs-go/competitive/ge.png'),
      require('../assets/cs-go/competitive/gn1.png'),
      require('../assets/cs-go/competitive/gn2.png'),
      require('../assets/cs-go/competitive/gn3.png'),
      require('../assets/cs-go/competitive/gnm.png'),
      require('../assets/cs-go/competitive/le.png'),
      require('../assets/cs-go/competitive/lem.png'),
      require('../assets/cs-go/competitive/mg1.png'),
      require('../assets/cs-go/competitive/mg2.png'),
      require('../assets/cs-go/competitive/mge.png'),
      require('../assets/cs-go/competitive/s1.png'),
      require('../assets/cs-go/competitive/s2.png'),
      require('../assets/cs-go/competitive/s3.png'),
      require('../assets/cs-go/competitive/s4.png'),
      require('../assets/cs-go/competitive/se.png'),
      require('../assets/cs-go/competitive/sem.png'),
      require('../assets/cs-go/competitive/smfc.png'),
      require('../assets/cs-go/competitive/unknown.png'),
    ]);

    await Promise.all([...imageAssets]);

    setIsReady(true);
  };

  useEffect(() => {
    bootstrapAsync();
  }, []);

  return { isReady };
}
