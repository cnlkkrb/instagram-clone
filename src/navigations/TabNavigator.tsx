import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserHomeScreen from '../screens/HomeScreen/UserHomeScreen';
import HomeIcon from '../assets/icon/home';
import SearchIcon from '../assets/icon/search';
import SearchFilledIcon from '../assets/icon/SearchFilled';
import VideoIcon from '../assets/icon/video';
import VideoFilledIcon from '../assets/icon/VideoFilled';
import StoreIcon from '../assets/icon/store';
import StoreFilledIcon from '../assets/icon/StoreFilled';
import Box from '../components/Box';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: 'black', borderTopColor: 'black'},
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (focused) return <HomeIcon fill={'white'} />;
            return <HomeIcon />;
          },
        }}
        name="UserHomeScreen"
        component={UserHomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (focused) return <SearchFilledIcon fill={'white'} />;
            return <SearchIcon fill={'black'} />;
          },
        }}
        name="UserHomeScreen2"
        component={UserHomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (focused) return <VideoFilledIcon fill={'white'} />;
            return <VideoIcon fill={'black'} />;
          },
        }}
        name="UserHomeScreen3"
        component={UserHomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (focused) return <StoreFilledIcon fill={'white'} />;
            return <StoreIcon fill={'black'} />;
          },
        }}
        name="UserHomeScreen4"
        component={UserHomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            if (focused)
              return (
                <Box
                  width={30}
                  height={30}
                  borderRadius={50}
                  backgroundColor="mainBackground"
                  borderColor="white"
                  borderWidth={2}></Box>
              );
            return (
              <Box
                width={30}
                height={30}
                borderRadius={50}
                backgroundColor="mainBackground"
                borderColor="white"
                borderWidth={1}></Box>
            );
          },
        }}
        name="UserHomeScreen5"
        component={UserHomeScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
