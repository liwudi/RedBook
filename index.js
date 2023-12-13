/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
// Redux config
import {Provider} from 'react-redux';
import {store} from './src/store/index';
// react-native-paper  started
import {PaperProvider, MD3LightTheme, configureFonts} from 'react-native-paper';
const fontConfig = {
  customVariant: {
    fontFamily: Platform.select({
      web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      ios: 'System',
      default: 'sans-serif', // and 'sans-serif-medium' for `fontWeight:"500"`
    }),
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  },
};
const theme = {
  ...MD3LightTheme,
  primary: 'tomato',
  secondary: 'yellow',
  fonts: configureFonts({config: fontConfig}),
};

AppRegistry.registerComponent(appName, () => () => (
  <React.StrictMode>
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </Provider>
  </React.StrictMode>
));
