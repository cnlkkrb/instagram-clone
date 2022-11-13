import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigator';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import MessageScreen from '../screens/MessageScreen/MessageScreen';

const Stack = createNativeStackNavigator();

const SignInNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: 'black'}, headerTintColor: 'white'}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={TabNavigation}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            animation: 'slide_from_right',
          }}
          name="Bildirimler"
          component={NotificationScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            animation: 'slide_from_right',
          }}
          name="Kullanıcı Adı"
          component={MessageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignInNavigator;
