/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { createAppContainer } from 'react-navigation'
import AppNavigators from './js/navigators/AppNavigators'

AppRegistry.registerComponent(appName, () => createAppContainer(AppNavigators));
