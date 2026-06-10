/* Zona 1 : Importaciones de Componentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Saludo} from './components/Saludo';
import { Saludo2} from './components/Saludo2';
import { Perfil } from './components/Perfil';



/* Zona 2: Main - Hogar de los componentess */
export default function App() {
  return (
    <View style={styles.container}>

      
      <Image source={require('./assets/wave.png')}/> 

      <Text>----------------- Componentes Nativos--------------</Text>

      <Text>Open up App.js to start working on your app!</Text>

      <Text>----------------- Componentes Propio Simple--------------</Text>

      <Saludo></Saludo>

      <Text>----------------- Componentes Propio Compuesto --------------</Text>

      <Saludo2></Saludo2>

      <Text>----------------- Perfil--------------</Text>

      <Perfil></Perfil>

      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3: Zona de los estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
