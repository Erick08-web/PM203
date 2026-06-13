/* Perfil */

import { Text, View, Button, StyleSheet } from "react-native";
import React, { useState } from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatri }) => {
    const [mostrar, setMostrar] = useState(false);
    return (
        <View Styles={styles.tarjeta}>
            <Text Style={styles.nombre} >{nombre}</Text>

            {/* Renderizado condicional  */}
            {mostrar &&
                <>
                    <View>
                        <Text Style={styles.carrera}>{carrera}</Text>
                        <Text Style={styles.otroTexto}>{materia}</Text>
                        <Text Style={styles.otroTexto}>{cuatri}</Text>
                    </View>
                </>
            }

            <Button title="Mostrar perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
    )
}

const styles = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: 600,
        textTransform: 'uppercase',
    },
    carrera: {
        fontSize: 18,
        color: 'blue',
        fonFamily: 'Roboto',
    },
    otroTexto: {
        fontSize: 12,
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },
    tarjeta: {
        borderWidth: 2,
        Padding: 25,
        margin: 15,
    },
});