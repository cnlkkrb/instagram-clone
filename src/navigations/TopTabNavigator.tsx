import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Email from '../screens/Email';
import Phone from '../screens/Phone';
import theme from '../theme/theme';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.mainBackground,
          height: 50,
          marginHorizontal: 28,
        },
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 15},
        tabBarIndicatorStyle: {backgroundColor: 'white'},
      }}>
      <Tab.Screen name="TELEFON" component={Phone} />
      <Tab.Screen name="E-POSTA" component={Email} />
    </Tab.Navigator>
  );
};

export default MyTabs;
