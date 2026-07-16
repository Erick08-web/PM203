// zona 1: importaciones
import { Text, View } from "react-native-web";


//Desarrollar una pequeña aplicacion utilizando props, state y componentes nativos
//de React Native
//Una tienda de tecnologia necesita un prototipo para 
//promocionar sus productos. La aplicacion debera mostar los articulos disponibles,
//permitir que los clientes agreguen comentarios, marcar productos favoritos y consultar
//informacion detallada de cada uno antes de realizar una posible compra

//ayudame tengo que crear un componente reutilizable llamado <tarjetaProducto/>
//debe recibir mediante propp y mostrar  esta informacio: nombre, marca y precio

import { View, Text } from 'reac-native';


export const Perfil = ({ nombre, marca, precio }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={[styles.tarjeta, estiloEXT]}>
            <Text style={styles.nombre}>{nombre}</Text>

            {/* Renderizado condicional */}
            {mostrar && (
                <View>
                    <Text style={styles.marca}>{materia}</Text>
                    <Text style={styles.precio}>{cuatri}</Text>
                </View>
            )}

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

});