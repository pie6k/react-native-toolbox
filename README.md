# react-native-toolbox

This is set of common react-native tools.

Hopefully it'll grow with time.

```
yarn add react-native-toolbox
```

## Quick showcase

```ts
import {
  alertPromise,
  confirmChoice,
  showActionSheetIOS,
  waitForInteractionsToEnd,
} from 'react-native-toolbox';

class SomeComponent extends Component {
  async showAlert() {
    await alertPromise({
      title: 'Title',
      message: 'Message',
      closeLabel: 'Close',
    });
    console.log('alert is closed now');
  }

  async deleteSomething() {
    const isConfirmed = await confirmChoice({
      title: 'Are you sure?',
      subtitle: 'This cannot be undone',
      confirmLabel: 'Remove',
      cancelLabel: 'Cancel',
      isDestructive: true, // will make 'Remove' red
    });

    if (isConfirmed) {
      callSomeRemoveApi();
    }
  }

  showActionSheet() {
    showActionSheetIOS({
      title: 'Title',
      message: 'Some message',
      options: [
        {
          label: 'Option A',
          isDestructive: false,
          selectCallback: () => console.log('Option A selected'),
        },
        {
          label: 'Option A',
          isDestructive: true,
          selectCallback: () => console.log('Option B selected'),
        },
      ],
      cancelLabel: 'Cancel',
      onCancel: () => console.log('cancelled'),
    });
  }

  async someActionThatHasToBeSmooth() {
    await waitForInteractionsToEnd();

    // perform heavy operation
  }
}
```
