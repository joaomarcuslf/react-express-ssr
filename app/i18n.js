import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en';
import pt from './translations/pt';

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      pt,
    },

    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });
