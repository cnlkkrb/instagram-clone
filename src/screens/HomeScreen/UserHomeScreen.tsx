import React from 'react';
import { ScrollView } from 'react-native';
import Box from '../../components/Box';
import { post } from '../../data/post';
import Header from './Header';
import Posts from './Posts';
import Stories from './Stories';

const UserHomeScreen = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <Header />
    <ScrollView>
      <Stories />
      {post.map((post) => <Posts key={post.id} post={post}/>)}
      </ScrollView>
    </Box>
  );
};

export default UserHomeScreen;
