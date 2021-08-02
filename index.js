/**
 * @format
 */

 import { AppRegistry, LogBox } from 'react-native';
 import App from './App';
 import { name as appName } from './app.json';
 
 if (!__DEV__) {
   console.log = () => {};
 }
 
 LogBox.ignoreLogs(['Require cycle']);
 
 AppRegistry.registerComponent(appName, () => App);
 