import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useForm} from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import { useAuth } from "../../context/UserContext";


export default function LoginScreen() {
  const { control, handleSubmit } = useForm();
  const { signIn, signOut } = useAuth();
  const onPressSignIn= ()=>{

  }
  return (
    <View style={styles.container}>
      <Text>Euro Bill Better</Text>
      <View>
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: "Veuillez entrez un email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Veuillez entrez un email valide",
            },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Mot de passe"
          control={control}
          secureTextEntry
          rules={{ required: "Veuillez entrez un mot de passe" }}
        />
      </View>
      <Button title="Se connecter" onPress={handleSubmit(signIn)} />

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    justifyContent: "center",
    width: "100%",
  },
});
