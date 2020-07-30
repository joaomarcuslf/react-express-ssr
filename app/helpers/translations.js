import { LANGUAGE_KEY } from '../constants/storage';
import { CookieStorage } from './storage';

export const formatTranslation = (translations) => (
  Object.keys(translations).reduce((acc, primaryKey) => {
    const secondaryKeys = Object.keys(translations[primaryKey]);

    const newObj = secondaryKeys.reduce((acc2, secondaryKey) => ({
      ...acc2,
      [`${primaryKey}-${secondaryKey}`]: translations[primaryKey][secondaryKey],
    }), {});

    return { ...acc, ...newObj };
  }, {})
);

export const setLanguage = (language) => new Promise((resolve) => {
  CookieStorage.set(LANGUAGE_KEY, language);

  resolve();
});

export const getLanguage = () => CookieStorage.get(LANGUAGE_KEY);
