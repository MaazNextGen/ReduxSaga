/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './store';
import MainScreen from './MainScreen';

const Main = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
