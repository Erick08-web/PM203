/* Zona 1 : Importaciones de Componentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import SafeAreaScreen from './SafeAreaScreen';
import TarjetaScreen from './TarjetaScreen';
import PressableScreen from './PressableScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import ModalScreen from './ModalScreen';



/* Zona 2: Main - Hogar de los componentess */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');
    switch (screen) {
        case 'tarjeta':
            return <TarjetaScreen />

        case 'safearea':
            return <SafeAreaScreen />

        case 'pressable':
            return <PressableScreen />

        case 'textinput':
            return <TextInputScreen />

        case 'flatlist':
            return <FlatListScreen />

        case 'imagebackground':
            return <ImageBackgroundScreen />

        case 'activityindicator':
            return <ActivityIndicatorScreen />

        case 'modal':
            return <ModalScreen />

        case 'menu':
        default:
            return (
                <View style={styles.container}>

                    <Text>Menú de practicas: </Text>

                    <Button title="Prcatica Tarjetas" onPress={() => setScreen('tarjeta')} />
                    <Button title="Practica SafeArea" onPress={() => setScreen('safearea')} />
                    <Button title="Practica: Pressable" onPress={() => setScreen('pressable')} />
                    <Button title="Practica: TextInput" onPress={() => setScreen('textinput')} />
                    <Button title="Practica: FlatList" onPress={() => setScreen('flatlist')} />
                    <Button title="Practica: ImageBackground" onPress={() => setScreen('imagebackground')} />
                    <Button title="Practica: ActivityIndicator" onPress={() => setScreen('activityindicator')} />
                    <Button title="Practica: Modal" onPress={() => setScreen('modal')} />


                    <StatusBar style="auto" />
                </View>


            );
    }
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
