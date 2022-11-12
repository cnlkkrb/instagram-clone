import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigator";

const Stack = createNativeStackNavigator();

const SignInNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignInNavigator;
