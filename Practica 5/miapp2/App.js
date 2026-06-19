/* Zona 1 : Importaciones de Componentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';



/* Zona 2: Main - Hogar de los componentess */
export default function App() {
  return (
    <View style={styles.container}>


      <MenuScreen />
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3: Zona de los estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },

});
