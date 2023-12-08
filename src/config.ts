import {Platform} from 'react-native';
interface ConfigInterface {
  server_type: 'TEST' | 'PROD' | 'LOCAL';
  mainColor: string;
  designWidth: number;
}
const Config: ConfigInterface = {
  mainColor: '#4f77db',
  server_type: 'TEST',
  designWidth: 375,
};
// server 配置
const Server = {
  TEST: 'http://wdservice.mapbar.com',
  PROD: 'http://wdservice.mapbar.com',
  LOCAL: 'http://127.0.0.1',
};
// 平台判断
const isAndroid = Platform.OS === 'android';
const isIOS = Platform.OS === 'ios';
// 正则
export default {
  ...Config,
  isAndroid,
  isIOS,
  server: Server[Config.server_type],
};
