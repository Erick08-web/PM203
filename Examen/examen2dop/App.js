import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tarjetaProducto from './screens/tarjetaProducto';
export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <tarjetaProducto></tarjetaProducto>



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


