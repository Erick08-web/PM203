import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   Switch,
   Pressable,
   Alert,
   ScrollView,
   Platform
} from 'react-native';

if (Platform.OS === "web") {
   Alert.alert = (titular, mensaje, boton) => {
      const list = Array.isArray(mensaje) ? mensaje : boton;

      if (list) {
         if (window.confirm(titular)) {
            list.find((b) => b.onPress)?.onPress();
         }
      } else {
         window.alert(titular + (mensaje ? "\n" + mensaje : ""));
      }
   };
}

export default function Formulario() {
   const [nombre, SetNombre] = useState("");
   const [carrera, SetCarrera] = useState("");
   const [semestre, SetSemestre] = useState("");

   const [asistira, SetAsistira] = useState(false);
   const [constancia, SetConstancia] = useState(false);
   const [deportes, SetDeportes] = useState(false);

   const toggleAsistira = () => SetAsistira(previousState => !previousState);
   const toggleConstancia = () => SetConstancia(previousState => !previousState);
   const toggleDeportes = () => SetDeportes(previousState => !previousState);

   const registro = () => {
      if (!nombre || !carrera || !semestre) {
         Alert.alert("Campos incompletos", "Debes llenar todos los campos.");
         return;
      }

      if (!semestre.match(/^[0-9]+$/)) {
         Alert.alert("Error", "El semestre debe ser un número.");
         return;
      }

      Alert.alert(
         "Registro enviado",
         `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\nTaller: ${asistira ? "Sí" : "No"}\nConstancia: ${constancia ? "Sí" : "No"}\nDeportes: ${deportes ? "Sí" : "No"}`
      );
   };

   return (
      <ScrollView contentContainerStyle={styles.container}>
         <View style={styles.formularioCard}>
            <Text style={styles.titulo}>Registro de Evento Universitario</Text>

            <TextInput
               style={styles.input}
               placeholder="Nombre completo"
               placeholderTextColor="gray"
               value={nombre}
               onChangeText={(texto) => SetNombre(texto)}
            />

            <TextInput
               style={styles.input}
               placeholder="Carrera"
               placeholderTextColor="gray"
               value={carrera}
               onChangeText={(texto) => SetCarrera(texto)}
            />

            <TextInput
               style={styles.input}
               placeholder="Semestre"
               placeholderTextColor="gray"
               keyboardType="number-pad"
               value={semestre}
               onChangeText={(texto) => SetSemestre(texto)}
            />

            <Text style={styles.subtitulo}>Opciones</Text>

            <View style={styles.row}>
               <Text style={styles.label}>¿Asistirá al taller?</Text>
               <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={asistira ? '#ffffff' : '#f4f3f4'}
                  onValueChange={toggleAsistira}
                  value={asistira}
               />
            </View>

            <View style={styles.row}>
               <Text style={styles.label}>¿Requiere constancia?</Text>
               <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={constancia ? '#ffffff' : '#f4f3f4'}
                  onValueChange={toggleConstancia}
                  value={constancia}
               />
            </View>

            <View style={styles.row}>
               <Text style={styles.label}>¿Participará en deportes?</Text>
               <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={deportes ? '#ffffff' : '#f4f3f4'}
                  onValueChange={toggleDeportes}
                  value={deportes}
               />
            </View>

            <Pressable
               onPress={registro}
               style={({ pressed }) => [
                  styles.boton,
                  { backgroundColor: pressed ? '#0056b3' : '#007BFF' }
               ]}
            >
               <Text style={styles.textoboton}>Enviar Registro</Text>
            </Pressable>
         </View>
         <StatusBar style="auto" />
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flexGrow: 1,
      backgroundColor: "#ffffff",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
   },
   formularioCard: {
      backgroundColor: '#ffffff',
      padding: 24,
      borderRadius: 15,
      width: '100%',
      maxWidth: 400,
      borderWidth: 2,
      borderColor: '#e6e6e6',
      gap: 15,
   },
   titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#000000',
      marginBottom: 20,
   },
   subtitulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000',
      marginTop: 15,
      marginBottom: 10,
   },
   input: {
      borderWidth: 1.5,
      borderColor: "#e6e6e6",
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      backgroundColor: "#ffffff",
      marginBottom: 5,
   },
   row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: 8,
   },
   label: {
      fontSize: 16,
      color: '#000000',
   },
   boton: {
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 8,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
   },
   textoboton: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
   },
});