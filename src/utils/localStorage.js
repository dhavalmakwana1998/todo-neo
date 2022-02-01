import { KEYS } from "./constant";

const LocalStorage = {
  get: (key) => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem(key);
    }

    return false;
  },

  getJSON: (key) => {
    if (typeof localStorage !== "undefined") {
      const data = LocalStorage.get(key);

      return data && data !== "undefined" ? JSON.parse(data) : "";
    }

    return false;
  },

  set: (...rest) => {
    if (typeof localStorage !== "undefined") {
      return localStorage.setItem(...rest);
    }

    return false;
  },

  setJSON: (key, value) => {
    if (typeof localStorage !== "undefined") {
      const data = JSON.stringify(value);

      return LocalStorage.set(key, data);
    }

    return false;
  },

  setToken: (token) => {
    LocalStorage.set(KEYS.authToken, token);
  },

  setUser: (user) => {
    LocalStorage.set(KEYS.user, JSON.stringify(user));
  },

  remove: (key) => {
    if (typeof localStorage !== "undefined") {
      return localStorage.removeItem(key);
    }
    return false;
  },

  clean: (key) => {
    if (typeof localStorage !== "undefined") {
      return localStorage.clear(key);
    }
    return false;
  },
};

const getToken = () => {
  if (typeof localStorage !== "undefined") {
    return LocalStorage.get(KEYS.authToken) || "";
  }
  return "";
};
const getUser = () => {
  if (typeof localStorage !== "undefined") {
    return LocalStorage.get(KEYS.authToken) || "";
  }
  return "";
};

const getEmail = async () => {
  if (typeof localStorage !== "undefined") {
    const email = LocalStorage.get(KEYS.email);

    return JSON.parse(email);
  }

  return {};
};

export { LocalStorage, getUser, getToken, getEmail };
