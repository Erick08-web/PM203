//Desarrollar una pequeña aplicacion utilizando props, state y componentes nativos
//de React Native
//Una tienda de tecnologia necesita un prototipo para 
//promocionar sus productos. La aplicacion debera mostar los articulos disponibles,
//permitir que los clientes agreguen comentarios, marcar productos favoritos y consultar
//informacion detallada de cada uno antes de realizar una posible compra

//ayudame tengo que crear un componente reutilizable llamado <tarjetaProducto/>
//debe recibir mediante propp y mostrar  esta informacio: nombre, marca y precio

import { View, Text } from 'reac-native';

export default function tarjetaProducto() {
    <View>
        <Producto

            estiloEXT={styles.tarjetaverde}
            nombre="Telefono"
            marca="Samsung"
            precio="$5000"

        />

        <Producto estiloEXT={styles.tarjetaRoja} nombre="Telefono"
            marca="Samsung"
            precio="$5000"></Producto>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },

});


