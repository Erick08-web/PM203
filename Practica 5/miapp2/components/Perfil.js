/* Perfil */

import { Text, View, Button } from "react-native";
import React, { useState } from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatri }) => {
    const [mostrar, setMostrar] = useState(false);
    return (
        <View>
            <Text>{nombre}</Text>

            {/* Renderizado condicional  */}
            {mostrar &&
                <>
                    <View>
                        <Text>{carrera}</Text>
                        <Text>{materia}</Text>
                        <Text>{cuatri}</Text>
                    </View>
                </>
            }

            <Button title="Mostrar perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
    )
}