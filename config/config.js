import development from './env/development';
import test from './env/test';
import production from './env/production';

let config;

switch (process.env.NODE_ENV) {
  case 'development':
    config = development;
    break;
  case 'test':
    config = test;
    break;
  case 'production':
    config = production;
    break;
  default:
    config = development;
}

export default config;
