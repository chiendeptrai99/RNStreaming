/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/OrderList/OrderList';
import {name as appName} from './app.json';
if (__DEV__) {
  import('./ReactotronConfig');
}

AppRegistry.registerComponent(appName, () => App);
