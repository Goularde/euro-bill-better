import React from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/UserContext";

export default function ProfileScreen() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Username : {user?.username}</Text>
      <Text>Username : {user?.username}</Text>
      {user?.my_city && <Text>City : {user?.my_city}</Text>}
      {user?.my_country && <Text>Country : {user?.my_country}</Text>}
      {user?.my_zip && <Text>Postal code : {user?.my_zip}</Text>}
      <Text>Total bills: {user?.totalbills}</Text>
      <Text>Total hits: {user?.totalhits}</Text>
      <Button title="Se déconnecter" onPress={() => signOut()} />
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
