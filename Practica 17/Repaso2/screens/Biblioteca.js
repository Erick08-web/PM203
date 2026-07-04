/* Zona 1: Importaciones de componentes y archivos */
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

/* Zona 2: Main - Hogar de los componentes */
export default function Biblioteca() {
    const [splash, setSplash] = useState(true);
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');
    const [cargando, setCargando] = useState(false);
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSplash(false);
        }, 2000);
    }, []);

    if (splash) {
        return (
            <View style={styles.splashContainer}>
                <Image
                    source={require('../assets/LibrosCarga.png')}
                    resizeMode="contain"
                    style={styles.logo}
                />
                <Text style={styles.splashTitulo}>Biblioteca</Text>
                <Text style={styles.splashTexto}>Cargando...</Text>
                <StatusBar style="auto" />
            </View>
        );
    }

    const agregarLibro = () => {
        if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
            Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
            return;
        }

        setCargando(true);

        setTimeout(() => {
            const nuevoLibro = {
                id: Date.now().toString(),
                titulo: titulo,
                autor: autor,
                genero: genero,
            };

            setLibros([...libros, nuevoLibro]);
            setTitulo('');
            setAutor('');
            setGenero('');
            setCargando(false);
            Alert.alert('Libro agregado', 'El libro se guardo correctamente.');
        }, 4000);
    };

    return (
        <ImageBackground
            source={require('../assets/BibliotecaFondo.png')}
            style={styles.fondo}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.titulo}>Registro de Libros Leidos</Text>

                <View style={styles.formulario}>
                    <TextInput
                        style={styles.input}
                        placeholder="Titulo del libro"
                        placeholderTextColor="#555"
                        value={titulo}
                        onChangeText={setTitulo}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Autor"
                        placeholderTextColor="#555"
                        value={autor}
                        onChangeText={setAutor}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Genero"
                        placeholderTextColor="#555"
                        value={genero}
                        onChangeText={setGenero}
                    />

                    {cargando && (
                        <ActivityIndicator
                            animating={true}
                            size="large"
                            color="#7a2f12"
                            style={styles.spinner}
                        />
                    )}

                    <Pressable style={styles.boton} onPress={agregarLibro}>
                        <Text style={styles.botonTexto}>Agregar libro</Text>
                    </Pressable>
                </View>

                <FlatList
                    data={libros}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.itemTitulo}>{item.titulo}</Text>
                            <Text style={styles.itemTexto}>Autor: {item.autor}</Text>
                            <Text style={styles.itemTexto}>Genero: {item.genero}</Text>
                        </View>
                    )}
                />
            </View>
            <StatusBar style="auto" />
        </ImageBackground>
    );
}

/* Zona 3: Estilos y Posicionamiento */
const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        width: '100%',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.30)',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    formulario: {
        backgroundColor: 'rgba(255,255,255,0.90)',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    input: {
        height: 44,
        borderColor: '#7a2f12',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    spinner: {
        marginVertical: 10,
    },
    boton: {
        backgroundColor: '#7a2f12',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    botonTexto: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: 'rgba(255,255,255,0.92)',
        padding: 14,
        borderRadius: 8,
        marginBottom: 10,
    },
    itemTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5a210d',
    },
    itemTexto: {
        fontSize: 14,
        color: '#333333',
        marginTop: 4,
    },
    splashContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 220,
        height: 220,
    },
    splashTitulo: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#333333',
        marginTop: 12,
    },
    splashTexto: {
        fontSize: 22,
        color: '#7a2f12',
        marginTop: 8,
    },
});
