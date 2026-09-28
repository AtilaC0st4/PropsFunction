
import { StyleSheet, Text, View } from 'react-native';
import Filho from './components/Filho';

export default function App() {

  const mostrarMensagem = (nome) => {
    alert(`OLÁ!!, ${nome}`)
  }

  return (
    <View style={styles.container}>
      <Text>Pai</Text>

      <Filho onMostrarMensagem={mostrarMensagem}  />
     
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
