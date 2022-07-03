import {Provider} from 'react-redux';
import {COLORS} from './src/values/Color';
import {store, persistor} from './src/redux/store';
import './src/i18n';
import {ReactComponentElement, useEffect} from 'react';
import {I18nManager, StatusBar} from 'react-native';
import i18n from 'i18n-js';
import NavigatorHandler from './src/navigators/NavigatorHandler';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

const RenderApp = ({children}: {children: ReactComponentElement<any, any>}) =>
  children;

export default function App() {
  useEffect(() => {
    if (i18n.locale === 'ar') {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  }, [i18n.locale]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={COLORS.primary} />
        <NavigatorHandler />
      </PersistGate>
    </Provider>
  );
}
