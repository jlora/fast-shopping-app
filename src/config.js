import { assign } from 'lodash';

import configDev from './config.development';
import configTest from './config.test';

let config;

switch (process.env.NODE_ENV) {
  case 'development':
    config = configDev;
    break;
  case 'test':
    config = configTest;
    break;
  case 'staging':
    //config = configStaging;
    break;
  case 'production':
    //config = configProd;
    break;
  default:
    config = configDev;
    break;
}

export default assign(config);
