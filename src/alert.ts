import { Alert } from 'react-native';

interface AlertOptions {
  title: string;
  message?: string;
  closeLabel?: string;
}

export async function alertPromise(options: AlertOptions | string) {
  if (typeof options === 'string') {
    options = { title: options };
  }
  const { title, message, closeLabel = 'OK' } = options;
  return new Promise((resolve) => {
    Alert.alert(title, message, [{ text: closeLabel, onPress: resolve }]);
  });
}
