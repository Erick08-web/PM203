import Constants from 'expo-constants';
import { NativeModules, Platform } from 'react-native';

const obtenerUrlApi = () => {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  if (Platform.OS === 'web') {
    return 'http://localhost:8000';
  }

  const hostUri =
    Constants.expoConfig?.hostUri ||
    Constants.manifest2?.extra?.expoClient?.hostUri ||
    Constants.manifest?.debuggerHost ||
    NativeModules.SourceCode?.scriptURL ||
    '';

  const host = hostUri
    .replace('exp://', '')
    .replace('http://', '')
    .replace('https://', '')
    .split(':')[0]
    .split('/')[0];

  if (host) {
    return `http://${host}:8000`;
  }

  return 'http://192.168.0.109:8000';
};

export const API_URL = obtenerUrlApi();
console.log('API_URL:', API_URL);

export const AUTH_HEADER = 'Basic YWRtaW46MTIzNA==';
