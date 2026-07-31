import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { API_URL, AUTH_HEADER } from '../config/api';

export default function EditarUsuarioScreen() {
  const { id, nombre: nombreInicial, edad: edadInicial } = useLocalSearchParams();
  const [nombre, setNombre] = useState(String(nombreInicial || ''));
  const [edad, setEdad] = useState(String(edadInicial || ''));
  const [cargando, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const actualizarUsuario = async () => {
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje('Vacios', 'Llenar todos los campos');
      return;
    }

    try {
      setCargando(true);

      const respuesta = await fetch(`${API_URL}/v1/usuarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: AUTH_HEADER,
        },
        body: JSON.stringify({
          nombre: nombre,
          edad: parseInt(edad),
        }),
      });

      if (!respuesta.ok) {
        throw new Error('No se pudo actualizar el usuario');
      }

      const datos = await respuesta.json();
      console.log('Usuario actualizado: ', datos);

      mostrarMensaje('Exito', 'Usuario actualizado correctamente');
      router.replace({
        pathname: '/detalles/[id]',
        params: {
          id,
          nombre,
          edad,
        },
      });
    } catch (error) {
      console.log('Error al actualizar: ', error);
      mostrarMensaje('Error', 'No fue posible actualizar el usuario');
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Editar Usuario</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Edad del usuario"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        <Pressable style={styles.boton} onPress={actualizarUsuario} disabled={cargando}>
          <Text style={styles.textoBoton}>
            {cargando ? 'Actualizando...' : 'Actualizar Usuario'}
          </Text>
        </Pressable>

        <Pressable style={styles.botonVolver} onPress={() => router.back()}>
          <Text style={styles.textoVolver}>Cancelar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#1F2937',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },

  boton: {
    backgroundColor: '#29bb0c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  botonVolver: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  textoVolver: {
    color: '#1F2937',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
