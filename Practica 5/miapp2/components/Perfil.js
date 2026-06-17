/* Perfil */

import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export const Perfil = ({ nombre, carrera, materia, cuatri, estiloEXT }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={[styles.tarjeta, estiloEXT]}>
            <Text style={styles.nombre}>{nombre}</Text>

            {/* Renderizado condicional */}
            {mostrar && (
                <View>
                    <Text style={styles.carrera}>{carrera}</Text>
                    <Text style={styles.otroTexto}>{materia}</Text>
                    <Text style={styles.otroTexto}>{cuatri}</Text>
                </View>
            )}

            <Button
                title={mostrar ? "Ocultar perfil" : "Mostrar perfil"}
                onPress={() => setMostrar(!mostrar)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    carrera: {
        fontSize: 18,
        color: 'blue',
        fontFamily: 'Roboto',
    },
    otroTexto: {
        fontSize: 12,
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },
    tarjeta: {
        borderWidth: 2,
        padding: 25,
        margin: 15,
    },
});