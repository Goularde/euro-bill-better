import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import { useForm } from "react-hook-form";

export default function RegisterBillScreen() {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <Text>Register new bill</Text>
      <CustomInput
        name="city"
        placeholder="City"
        control={control}
        rules={{
          required: "Please enter a city",
        }}
      />
      <CustomInput
        name="zip"
        placeholder="Zip"
        control={control}
        rules={{
          required: "Please enter a zip",
        }}
      />
      <CustomInput
        name="contry"
        placeholder="Contry"
        control={control}
        rules={{
          required: "Please enter a contry",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
