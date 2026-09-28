
import { StyleSheet, Text, View } from 'react-native';
import Filho from './components/Filho';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pai</Text>
     <Filho/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
