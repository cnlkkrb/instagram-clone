import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import VerifySmsScreen from "../screens/VerifySmsScreen";
import UserSynchronizedScreen from "../screens/UserSynchronizedScreen";
import EmailVerify from "../screens/EmailVerify";


type LoggedOutNavigatorParams = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
    VerifySmsScreen: undefined;
    UserSynchronizedScreen: undefined;
    EmailVerify:undefined;
};

const Stack = createNativeStackNavigator<LoggedOutNavigatorParams>();

const NotSignInNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false }} name="VerifySmsScreen" component={VerifySmsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="UserSynchronizedScreen" component={UserSynchronizedScreen} />
        <Stack.Screen options={{ headerShown: false }} name="EmailVerify" component={EmailVerify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NotSignInNavigator;