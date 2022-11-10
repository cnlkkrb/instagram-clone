import React, {useState} from 'react';
import UserLogo from '../assets/img/user-logo';
import Box from '../components/Box';
import MyTabs from '../navigations/TopTabNavigator';

const RegisterScreen = ({navigation}: any) => {
  return (
    <Box
      justifyContent="center"
      flex={1}
      backgroundColor="mainBackground">
      <Box flex={1} mt="logo">
        <Box alignItems="center" mb="m">
          <UserLogo />
        </Box>
        <MyTabs />
      </Box>
    </Box>
  );
};

export default RegisterScreen;
