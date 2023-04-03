import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/screens/Login/LoginScreen";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect } from "react";
import { useAuth } from "./src/context/UserContext";
import RegisterBillScreen from "./src/screens/RegisterBill/RegisterBillScreen";

export default function Index() {
  const { user } = useAuth();
  const Tab = createBottomTabNavigator();
  useEffect(() => {}, [user]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Login") {
              iconName = focused ? "log-in" : "log-in-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Bill") {
              iconName = focused ? "cash" : "cash-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#2a9d8f",
          tabBarInactiveTintColor: "gray",
        })}
      >
        {user ? (
          <>
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Bill" component={RegisterBillScreen} />
          </>
        ) : (
          <Tab.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Se connecter", headerTitleAlign: "center" }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
