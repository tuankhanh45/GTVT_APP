/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from './src/screen/LoginScreen';

AppRegistry.registerComponent(appName, () => LoginScreen);
