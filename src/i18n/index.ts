import i18n from 'i18n-js';
import en from './locales/en.json';
import ar from './locales/ar.json';
import {NativeModules, Platform} from 'react-native';

const locale =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

i18n.translations = {
  en,
  ar,
};
i18n.locale = locale;
i18n.fallbacks = true;

export default i18n;
