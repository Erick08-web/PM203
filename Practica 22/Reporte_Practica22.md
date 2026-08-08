# Práctica No. 22: APK e instalación en Android

## Datos generales

**Alumno:** Erick Álvarez Balderas  
**Grupo:** S-203  
**Materia:** Programación Móvil  
**Docente:** Iván Isay Guerra López  
**Proyecto utilizado:** `usuarioApi`  

## Objetivo

Investigar y aplicar el proceso necesario para generar un archivo APK de una aplicación desarrollada con React Native y Expo, utilizando Expo Application Services (EAS). La práctica se realiza sobre el proyecto `usuarioApi`, que corresponde a la aplicación final desarrollada en la práctica 21.

## Relación con la práctica 21

En la práctica 21 se completó el proyecto `usuarioApi`, una aplicación móvil conectada a una API creada con FastAPI. La aplicación permite consultar usuarios, ver el detalle de cada usuario, navegar mediante Stack con Expo Router, editar información, actualizar registros con `PUT`, eliminar usuarios con `DELETE` y confirmar la eliminación mediante un modal.

Por lo tanto, en esta práctica se utiliza ese mismo proyecto como base para generar una versión instalable en Android mediante un archivo APK.

## Nota sobre el uso de iPhone

Debido a que utilizo iPhone y los archivos APK solo pueden instalarse en dispositivos Android, la evidencia de instalación se realizará con apoyo de un compañero que cuenta con teléfono Android. Mi participación consiste en investigar, configurar el proyecto, generar el APK mediante EAS Build y documentar el procedimiento. El dispositivo Android de mi compañero se utilizará únicamente para descargar, instalar, probar y grabar el funcionamiento de la aplicación.

## Configuración realizada en el proyecto

Para preparar la aplicación `usuarioApi` se revisó y ajustó el archivo `app.json`. Se configuró el nombre visible de la aplicación como **Usuario API**, se definió el identificador de Android `com.erickalvarez.usuarioapi`, se asignó el ícono principal y se configuró la pantalla de carga o splash screen.

También se agregó el archivo `eas.json`, donde se definieron perfiles de compilación. El perfil principal para esta práctica es `preview`, ya que permite generar un archivo `.apk` instalable directamente en un dispositivo Android.

Como la aplicación consume la API local `miAPI`, antes de generar el APK se debe verificar la IP local de la computadora donde se ejecuta el backend. Para esta configuración se usó la URL `http://10.16.29.42:8000`. El teléfono Android debe estar conectado a la misma red WiFi y la API debe estar encendida durante la prueba.

## Comandos principales del proceso

Instalar EAS CLI:

```bash
npm install -g eas-cli
```

Iniciar sesión con la cuenta de Expo:

```bash
npx eas-cli@latest login
```

Configurar el proyecto para EAS Build:

```bash
npx eas-cli@latest build:configure
```

Generar el APK de Android con el perfil `preview`:

```bash
npx eas-cli@latest build -p android --profile preview
```

Cuando el proceso termina, EAS muestra un enlace para descargar el APK. Ese enlace se comparte con el compañero que tiene Android para instalar la aplicación y grabar la evidencia.

Antes de grabar la evidencia se debe iniciar la API local:

```bash
cd miAPI
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

El teléfono Android debe estar en la misma red que la computadora. Si cambia la red WiFi, también puede cambiar la IP local; en ese caso se debe actualizar la variable `EXPO_PUBLIC_API_URL` en `eas.json` y volver a generar el APK.

## Cuestionario

### a) ¿Qué es Expo Application Services (EAS)?

Expo Application Services, conocido como EAS, es un conjunto de servicios en la nube para proyectos desarrollados con Expo y React Native. Su función principal es facilitar tareas como compilar aplicaciones, generar archivos instalables, manejar credenciales de firma y preparar versiones para distribución interna o para tiendas como Google Play y App Store. En esta práctica se utiliza EAS Build para generar el archivo APK de Android.

### b) ¿Qué diferencia existe entre Expo Go y un APK?

Expo Go es una aplicación que permite ejecutar y probar proyectos Expo durante el desarrollo sin generar una aplicación independiente. Sirve para revisar cambios rápidamente, pero la app depende del entorno de Expo Go.

Un APK, en cambio, es un paquete instalable de Android. Permite instalar la aplicación como una app independiente en un dispositivo Android. Para esta práctica se necesita un APK porque el entregable pide mostrar la aplicación móvil instalada y funcionando en un teléfono.

### c) ¿Qué es EAS CLI y cómo se instala?

EAS CLI es la herramienta de línea de comandos que permite interactuar con los servicios de Expo Application Services desde la terminal. Con ella se puede iniciar sesión, configurar un proyecto, ejecutar builds, revisar compilaciones y administrar procesos relacionados con EAS.

Se instala con el siguiente comando:

```bash
npm install -g eas-cli
```

También puede usarse con `npx` para ejecutar la versión más reciente sin instalarla globalmente:

```bash
npx eas-cli@latest build -p android --profile preview
```

### d) ¿Cómo crear una cuenta en Expo?

Para crear una cuenta en Expo se ingresa al sitio oficial de Expo y se selecciona la opción de registro. La cuenta permite usar servicios como EAS Build, guardar proyectos, consultar builds y acceder a enlaces de descarga de las aplicaciones generadas.

### e) ¿Cómo iniciar sesión desde la terminal?

Para iniciar sesión desde la terminal se utiliza el comando:

```bash
npx eas-cli@latest login
```

Después se ingresan las credenciales de la cuenta de Expo. También existe el comando `npx eas-cli@latest account:login`, que permite iniciar sesión con la cuenta desde EAS CLI.

### f) ¿Cómo configurar un proyecto para utilizar EAS Build?

Primero se debe tener un proyecto Expo o React Native. Después se instala o ejecuta EAS CLI y se inicia sesión con la cuenta de Expo. Luego, dentro de la carpeta del proyecto, se ejecuta:

```bash
npx eas-cli@latest build:configure
```

Este comando prepara el proyecto para usar EAS Build y puede crear o actualizar el archivo `eas.json`. En ese archivo se definen los perfiles de compilación, como `development`, `preview` y `production`.

### g) ¿Cuál es la diferencia entre un archivo APK y un AAB?

Un APK es un paquete instalable directamente en un dispositivo Android. Es útil para pruebas, distribución interna o entrega de evidencias, porque el usuario puede descargarlo e instalarlo en el teléfono.

Un AAB, Android App Bundle, es el formato recomendado para publicar aplicaciones en Google Play. No se instala directamente como un APK común, sino que Google Play lo utiliza para generar versiones optimizadas según el dispositivo del usuario.

### h) ¿Qué perfiles de compilación existen: development, preview y production?

El perfil `development` se utiliza para generar compilaciones orientadas al desarrollo. Normalmente incluye herramientas para depuración o un development client.

El perfil `preview` se utiliza para generar una versión de prueba o distribución interna. En esta práctica se configura para producir un APK, ya que se necesita instalar la aplicación directamente en un teléfono Android.

El perfil `production` se utiliza para generar versiones finales destinadas a publicación o distribución formal. En Android normalmente puede producir un AAB para Google Play, aunque la configuración puede ajustarse según las necesidades del proyecto.

### i) ¿Cómo generar un APK utilizando EAS Build?

Para generar un APK se debe configurar un perfil en `eas.json` con `android.buildType` igual a `apk`. En este proyecto se agregó el perfil `preview`:

```json
{
  "build": {
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

Después se ejecuta:

```bash
npx eas-cli@latest build -p android --profile preview
```

Cuando la compilación termina, Expo proporciona un enlace para descargar el APK generado.

### j) ¿Cómo descargar e instalar el APK generado en un dispositivo Android?

Cuando EAS Build termina, se copia el enlace de descarga del APK y se abre desde el dispositivo Android. Después se descarga el archivo y se instala. En algunos teléfonos puede ser necesario permitir la instalación de aplicaciones de origen desconocido desde el navegador o administrador de archivos.

Otra opción es descargar el APK en una computadora y conectarse al dispositivo Android con `adb`. En ese caso se puede instalar con:

```bash
adb install ruta/del/archivo.apk
```

Para esta práctica se usará el método de enlace de descarga, ya que el APK será instalado en el teléfono Android de un compañero.

## Evidencia esperada

La evidencia final debe ser una grabación de pantalla del teléfono Android. El video debe iniciar mostrando el fondo de pantalla del teléfono, después debe mostrar que la aplicación **Usuario API** está instalada y finalmente debe abrirse la aplicación para demostrar que funciona.

## Participación del compañero con Android

El compañero con Android apoyará en la parte de instalación y evidencia. Sus actividades serán descargar el APK desde el enlace generado por EAS Build, instalarlo en su teléfono, abrir la aplicación y grabar la pantalla mostrando el funcionamiento. La configuración, investigación, generación del APK y documentación corresponden a mi parte del trabajo.

## Conclusión

En esta práctica se investigó el proceso para generar un APK de una aplicación hecha con React Native y Expo. Se preparó el proyecto `usuarioApi`, desarrollado en la práctica 21, para compilarse con EAS Build. También se identificó la diferencia entre Expo Go, APK y AAB, así como la función de EAS CLI y los perfiles de compilación.

Debido a que uso iPhone, la instalación del APK se realizará con apoyo de un compañero que tiene Android. Esto permite cumplir con la evidencia solicitada sin cambiar el trabajo principal, ya que la configuración, generación del APK y reporte corresponden al proyecto desarrollado.

## Referencias

Expo. (2025, octubre 8). *Build APKs for Android emulators and devices*. Expo Documentation. https://docs.expo.dev/build-reference/apk/

Expo. (2026, junio 26). *Splash screen and app icon*. Expo Documentation. https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/

Expo. (2026). *Create your first build*. Expo Documentation. https://docs.expo.dev/build/setup/

Expo. (2026). *EAS Build*. Expo Documentation. https://docs.expo.dev/build/introduction/

Expo. (2026). *EAS CLI*. Expo Documentation. https://docs.expo.dev/eas/cli/
