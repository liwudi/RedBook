import ToastMessage from 'react-native-simple-toast';

const Toast = {
  show: (msg: string) => {
    ToastMessage.show(msg, ToastMessage.SHORT);
  },
};
export default Toast;
