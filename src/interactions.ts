import { InteractionManager } from 'react-native';

export async function waitForInteractionsToEnd() {
  return new Promise((resolve) => {
    InteractionManager.runAfterInteractions(resolve);
  });
}
