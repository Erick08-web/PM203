/* Zona 1 : Importaciones de Componentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



/* Zona 2: Main - Hogar de los componentess */
export default function ModalScreen() {
    return (
        <View style={styles.container}>

            <Text>Aqui va la practica de Fer</Text>

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
