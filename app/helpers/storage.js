export const CookieStorage = {
  get(key) {
    if (typeof document !== 'undefined') {
      const name = `${key}=`;
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];

        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
    }

    return null;
  },
  set(key, value, exdays = 9999) {
    if (typeof document !== 'undefined') {
      const d = new Date();

      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

      const expires = `expires=${d.toUTCString()}`;

      document.cookie = `${key}=${value};${expires};path=/`;
    }
  },
};

export const LocalStorage = {
  get(key) {
    localStorage.getItem(key);
  },
  set(key, value) {
    localStorage.setItem(key, value);
  },
};

const Storage = {
  get(key) {
    if (typeof localStorage !== 'undefined') {
      return LocalStorage.get(key);
    } if (typeof document !== 'undefined') {
      return CookieStorage.get(key);
    }

    throw new Error('No Storage Avaiable');
  },
  set(key, value) {
    if (typeof localStorage !== 'undefined') {
      return LocalStorage.set(key, value);
    } if (typeof document !== 'undefined') {
      return CookieStorage.set(key, value);
    }

    throw new Error('No Storage Avaiable');
  },
};

export default Storage;
