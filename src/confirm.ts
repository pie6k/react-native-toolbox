import { Alert } from 'react-native';

interface ConfirmChoiceOptions {
  title: string;
  subtitle?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isDestructive?: boolean;
}

export async function confirmChoice({
  title,
  subtitle,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  isDestructive = true,
}: ConfirmChoiceOptions): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    Alert.alert(
      title,
      subtitle,
      [
        {
          text: confirmLabel,
          onPress: () => resolve(true),
          style: isDestructive ? 'destructive' : 'default',
        },
        { text: cancelLabel, onPress: () => resolve(false), style: 'cancel' },
      ],
      { cancelable: false },
    );
  });
}
