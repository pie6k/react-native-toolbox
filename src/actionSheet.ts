import { ActionSheetIOS, Platform } from 'react-native';

export interface ActionSheetOption {
  isDestructive?: boolean;
  label: string;
  selectCallback: () => void;
}

export interface ActionSheetOptions {
  title?: string;
  message?: string;
  options: ActionSheetOption[];
  cancelLabel?: string;
  onCancel?: () => void;
}

function getDestructiveOptionIndex(options: ActionSheetOption[]) {
  return options.findIndex((option) => {
    return option.isDestructive || false;
  });
}

export function showActionSheetIOS({
  title,
  message,
  options,
  cancelLabel,
}: ActionSheetOptions) {
  const destructiveButtonIndex = getDestructiveOptionIndex(options);
  const optionsLabelsList: string[] = [
    ...options.map((optionData) => optionData.label),
    cancelLabel,
  ].filter((label) => !!label) as string[];
  ActionSheetIOS.showActionSheetWithOptions(
    {
      title,
      message,
      options: optionsLabelsList,
      destructiveButtonIndex,
      cancelButtonIndex: options.length,
    },
    (selectedOptionIndex: number) => {
      const selectedOptionData = options[selectedOptionIndex];
      if (!selectedOptionData) {
        return;
      }
      const callback = selectedOptionData.selectCallback;
      if (!callback) {
        return;
      }
      callback();
    },
  );
}
