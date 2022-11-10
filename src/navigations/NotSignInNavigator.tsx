import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

type LoggedOutNavigatorParams = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<LoggedOutNavigatorParams>();

const NotSignInNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NotSignInNavigator;