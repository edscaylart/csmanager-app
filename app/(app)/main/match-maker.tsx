import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function MatchMaker() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Sorteios' }} />
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Sorteio</Text>
          <Text style={styles.subtitle}>Match Maker</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
