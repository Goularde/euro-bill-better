import {setItemAsync} from "expo-secure-store";

export const save = async (key: string, value: string ) => {
  try{
    await setItemAsync(key, value);
    return true;
  }catch(err){
    return false;
  }
};