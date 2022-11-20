import { AsyncStorageKeys } from '@types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const readStorage = async (key: AsyncStorageKeys) => {
  const today = new Date();
  const data = await AsyncStorage.getItem(key);

  if (!data) {
    return null;
  }

  const {
    value,
    expirationDate,
  } = JSON.parse(data);

  if (today.getTime() > expirationDate.getTime()) {
    await AsyncStorage.removeItem(key);
    return null;
  }

  return value;
};

const setStorage = async (key: AsyncStorageKeys, value: unknown, expire?: number) => {
  const expirationDate = new Date();

  if (expire) {
    expirationDate.setDate(expirationDate.getTime() + expire);
  } else {
    expirationDate.setDate(expirationDate.getFullYear() + 1);
  }

  const data = {
    value,
    expirationDate,
  };

  return await AsyncStorage.setItem(key, JSON.stringify(data));
};

const removeStorage = async (key: AsyncStorageKeys) => await AsyncStorage.removeItem(key);

export {
  readStorage,
  setStorage,
  removeStorage,
};
