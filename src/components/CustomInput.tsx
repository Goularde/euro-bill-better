import { useState } from "react";
import { Control, Controller, FieldValues, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

type CustomInputProps = {
  control: Control<FieldValues, any>;
  name: string;
  rules: {
    required?: boolean | string;
    pattern?: {
      value: any;
      message: string;
    };
  };
  placeholder: string;
  secureTextEntry?: boolean | undefined;
};

export default function CustomInput({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}: CustomInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <View
            style={[
              styles.container,
              {
                borderColor: error ? "red" : "#e8e8e8",
              },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[styles.input, {}]}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Erreur"}
            </Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
