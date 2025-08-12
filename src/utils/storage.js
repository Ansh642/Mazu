import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_USER_KEY = 'auth:user';

async function setItem(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    throw error;
  }
}

async function getItem(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    return null;
  }
}

async function removeItem(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw error;
  }
}

export const storage = {
  setItem,
  getItem,
  removeItem,
  AUTH_USER_KEY,
};


