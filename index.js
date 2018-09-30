/** @format */
import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

// Render component to a device
AppRegistry.registerComponent(appName, () => App);
