import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { API_URL, AUTH_HEADER } from '../config/api';

export default function DetalleUsuarioScreen() {
  const { id, nombre, edad } = useLocalSearchParams();
  const [eliminando, setEliminando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const confirmarEliminar = () => {
    if (Platform.OS === 'web') {
      const confirmado = window.confirm('¿Seguro que deseas eliminar este usuario?');
      if (confirmado) {
        eliminarUsuario();
      }
      return;
    }

    Alert.alert(
      'Eliminar usuario',
      '¿Seguro que deseas eliminar este usuario?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', style: 'destructive', onPress: eliminarUsuario },
      ],
    );
  };

  const eliminarUsuario = async () => {
    try {
      setEliminando(true);

      const respuesta = await fetch(`${API_URL}/v1/usuarios/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: AUTH_HEADER,
        },
      });

      if (!respuesta.ok) {
        throw new Error('No se pudo eliminar el usuario');
      }

      mostrarMensaje('Exito', 'Usuario eliminado correctamente');
      router.replace('/consulta');
    } catch (error) {
      console.log('Error al eliminar: ', error);
      mostrarMensaje('Error', 'No fue posible eliminar el usuario');
    } finally {
      setEliminando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Detalle Usuario</Text>

        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>{String(nombre || 'U').charAt(0).toUpperCase()}</Text>
        </View>

        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.info}>ID: {id}</Text>
        <Text style={styles.info}>Edad: {edad} años</Text>

        <Pressable
          style={styles.botonEditar}
          onPress={() => router.push({
            pathname: '/editar/[id]',
            params: {
              id,
              nombre,
              edad,
            },
          })}
        >
          <Text style={styles.textoBoton}>Editar usuario</Text>
        </Pressable>

        <Pressable
          style={styles.botonEliminar}
          onPress={confirmarEliminar}
          disabled={eliminando}
        >
          <Text style={styles.textoBoton}>
            {eliminando ? 'Eliminando...' : 'Eliminar usuario'}
          </Text>
        </Pressable>

        <Pressable style={styles.botonVolver} onPress={() => router.back()}>
          <Text style={styles.textoVolver}>Volver</Text>
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
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
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
    color: '#1F2937',
    marginBottom: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },

  avatarTexto: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
  },

  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 10,
  },

  info: {
    fontSize: 18,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 8,
  },

  botonEditar: {
    backgroundColor: '#29bb0c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  botonEliminar: {
    backgroundColor: '#DC2626',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
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
