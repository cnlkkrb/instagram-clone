import React from 'react';
import { ScrollView } from 'react-native';
import Box from '../../components/Box';
import Header from './Header';
import Posts from './Posts';
import Stories from './Stories';

const UserHomeScreen = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <Header />
    <ScrollView>
      <Stories />
      <Posts/>
      </ScrollView>
    </Box>
  );
};

export default UserHomeScreen;
