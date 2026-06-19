/* Zona 1 : Importaciones de Componentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from '../components/Perfil';



/* Zona 2: Main - Hogar de los componentess */
export default function TarjetaScreen() {
    return (
        <View style={styles.container}>


            {/* <Image source={require('./assets/wave.png')} />

      <Text>----------------- Componentes Nativos--------------</Text>

      <Text>Open up App.js to start working on your app!</Text>

      <Text>----------------- Componentes Propio Simple--------------</Text>

      <Saludo></Saludo>

      <Text>----------------- Componentes Propio Compuesto --------------</Text>

      <Saludo2></Saludo2>
 */}
            <Text>----------------- Perfil--------------</Text>

            <Perfil estiloEXT={styles.tarjetaRoja} nombre="Erick Alvarez" carrera="Sistemas" materia="Programación movil" cuatri="Noveno"></Perfil>





            <Perfil

                estiloEXT={styles.tarjetaverde}
                nombre="Erick Alvarez"
                carrera="Sistemas"
                materia="Programación movil"
                cuatri="Noveno"

            />

            <Perfil estiloEXT={styles.tarjetaRoja} nombre="Erick Alvarez 2" carrera="Sistemas" materia="Programación movil" cuatri="Noveno"></Perfil>

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

    tarjetaRoja: { backgroundColor: '#FF6B6B' },
    tarjetaverde: { backgroundColor: '#6BCB77' },
});
