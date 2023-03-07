import { StyleSheet, Text, View } from 'react-native';

export default function Players() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Jogadores</Text>
          <Text style={styles.subtitle}>Listas e CRUD de jogadores</Text>
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
