import * as SecureStore from "expo-secure-store";

export const getValueFor = async (key: string) => {
  const result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  }
  return null;
};
