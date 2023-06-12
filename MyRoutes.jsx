import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/Screens/LoginScreen";
import SingupScreen from "./src/Screens/SingupScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import { useUserState } from "./src/Slices/userSlice";

const Stack = createNativeStackNavigator();

const MyRoutes = () => {
  const userState = useUserState()
  const initialRouteName = userState.id ? "Home" : "Login";

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SingUp" component={SingupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyRoutes;

const styles = StyleSheet.create({});
