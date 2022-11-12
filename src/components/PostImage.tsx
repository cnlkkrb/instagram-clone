import React from 'react';
import {Image, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const ratio = 768 / width;
const height = 768 / ratio;


const Posts = ({src}: any) => {
  return <Image resizeMode='cover' style={{width: width, height: height}} source={src} />;
};

export default Posts;
