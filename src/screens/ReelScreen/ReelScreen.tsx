import React from 'react';
import {Dimensions} from 'react-native';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Feather from 'react-native-vector-icons/Feather';
import Reels from '../../components/Reels';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ReelScreen = () => {
  return (
    <Box width={width} height={height} position="relative" backgroundColor='mainBackground'>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        flexDirection="row"
        justifyContent="space-between"
        zIndex={1}
        padding={'s'}>
        <Text variant='heading5'>Reels</Text>
        <Feather name='camera' size={30} color='white'/>
      </Box>
      <Reels />
    </Box>
  );
};

export default ReelScreen;
