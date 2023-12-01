//
import config from '../config';

import RequestService from './RequestService';
export function checkUpdate() {
  return RequestService.get(config.server + '/checkUpdate');
}
