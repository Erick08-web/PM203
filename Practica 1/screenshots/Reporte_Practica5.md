# Reporte de la Práctica 5: Creación y Renderizado Condicional de Componentes en React Native

## Integrante / Autor
* **Erick Alvarez**

---

## 1. Introducción y Objetivo
El objetivo de esta práctica es aprender a estructurar componentes personalizados en React Native, pasándoles información dinámica a través de `props`, y controlando su visibilidad y comportamiento en la interfaz del usuario mediante el estado local (`useState`) y el renderizado condicional.

---

## 2. Desarrollo de la Práctica Paso a Paso

### Paso 1: Creación y Refactorización del Componente de Perfil
Se creó un nuevo componente llamado `Perfil` dentro del directorio `components/Perfil.js`. 
* El componente fue refactorado para utilizar la **desestructuración de props** en su definición: `{ nombre, carrera, materia, cuatri }`.
* Se implementó el estado local `mostrar` utilizando el hook `useState` de React, inicializado en `false` para que la información se mantenga oculta al inicio.
* Se agregó un renderizado condicional empleando el operador lógico `&&` para mostrar la carrera, materia y cuatrimestre solo cuando `mostrar` sea verdadero (`true`).
* Se añadió un componente `<Button>` con la propiedad `onPress` que alterna el estado de visibilidad mediante `setMostrar(!mostrar)`.

**Código de [Perfil.js](file:///Users/erick/Documents/GitHub/PM203/Practica%205/miapp2/components/Perfil.js):**
```javascript
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
```

---

### Paso 2: Integración y Limpieza en el Archivo Principal (App.js)
En el archivo principal `App.js`, se realizaron las siguientes modificaciones:
1. Se comentaron los componentes nativos previos y otros componentes simples (`Saludo`, `Saludo2`, etc.) para dejar limpia la interfaz.
2. Se importó el componente `Perfil`.
3. Se instanciaron dos representaciones del componente `Perfil` pasando los datos correspondientes como props. La segunda instancia se escribió con un formato multilínea y mayor espaciado para mejorar la legibilidad del código.

**Código de [App.js](file:///Users/erick/Documents/GitHub/PM203/Practica%205/miapp2/App.js):**
```javascript
/* Zona 1 : Importaciones de Componentes y archivos*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

/* Zona 2: Main - Hogar de los componentes */
export default function App() {
  return (
    <View style={styles.container}>


      {/* <Image source={require('./assets/wave.png')} />

      <Text>----------------- Componentes Nativos--------------</Text>

      <Text>Open up App.js to start working on your app!</Text>

      <Text>----------------- Componentes Propio Simple--------------</Text>

      <Saludo></Saludo>

      <Text>----------------- Componentes Propio Compuesto --------------</Text>

      <Saludo2></Saludo2>
 */}
      <Text>----------------- Perfil--------------</Text>

      <Perfil nombre="Erick Alvarez" carrera="Sistemas" materia="Programación movil" cuatri="Noveno"></Perfil>


      <Text>------------------------------------------------------------</Text>
      <Text>------------------------------------------------------------</Text>



      <Perfil


        nombre="Erick Alvarez"
        carrera="Sistemas"
        materia="Programación movil"
        cuatri="Noveno"

      />


      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3: Zona de los estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

---

## 3. Capturas de Pantalla del Desarrollo
A continuación se muestran las capturas de pantalla de la ejecución que ilustran el comportamiento y los estados del componente desarrollado:

### Estado Inicial (Detalles Ocultos)
Cuando la aplicación se inicia, el estado `mostrar` es `false`, por lo que solo se renderiza el nombre del perfil y el botón de acción:

![Estado Inicial](./screenshots/perfil_inicial.png)

### Estado Expandido (Detalles Mostrados)
Al pulsar sobre el botón **"Mostrar perfil"**, la función `setMostrar(!mostrar)` cambia el estado `mostrar` a `true`. El renderizado condicional evalúa la condición `{mostrar && ...}` como verdadera, renderizando en pantalla la carrera, materia y cuatrimestre correspondientes:

![Estado Expandido](./screenshots/perfil_expandido.png)

---

## 4. Resultado Final de la Práctica
La práctica concluye exitosamente con el funcionamiento reactivo de la interfaz. La aplicación móvil ahora es capaz de:
* Pasar datos estructurados mediante props de forma dinámica.
* Controlar dinámicamente la visibilidad de la información académica del perfil a través del estado local (`useState`).
* Alternar de forma fluida el renderizado de la información mediante eventos de clic en el componente `<Button>`.

---

## 5. Conclusión
Durante el desarrollo de esta práctica se obtuvieron y reforzaron los siguientes conocimientos clave:

1. **Gestión de Componentes y Props:** Se aprendió a estructurar componentes reutilizables y limpios utilizando la desestructuración de propiedades directamente en los parámetros de la función, facilitando un código más legible, mantenible y libre de redundancias (`props.nombre` -> `nombre`).
2. **Uso del Estado Local (`useState`):** Comprendimos la importancia del estado interno de los componentes para manejar interacciones dinámicas en tiempo real. La reactividad es fundamental en el desarrollo móvil para actualizar elementos de la interfaz de usuario en respuesta a interacciones sin necesidad de recargar la vista completa.
3. **Renderizado Condicional:** Aprendimos a utilizar operadores lógicos como el cortocircuito lógico (`&&`) para condicionar qué partes del árbol de componentes se deben renderizar en pantalla. Esto representa una técnica vital para mejorar la experiencia del usuario y optimizar la visualización de información bajo demanda en pantallas de dispositivos móviles, evitando sobrecargar visualmente al usuario.
