import React from 'react';
import {TouchableOpacity} from 'react-native';
import HeartIcon from '../../assets/icon/Heart';
import MessengerIcon from '../../assets/icon/Messenger';
import PostIcon from '../../assets/icon/Post';
import Box from '../../components/Box';
import Text from '../../components/Text';

const Header = () => {
  return (
    <Box>
      <Box
        mt="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginHorizontal='m'
        mb='xs'>
        <Text fontSize={30} color="white" variant="heading1">
          Instagram
        </Text>
        <Box flexDirection='row'>
          <TouchableOpacity style={{marginRight: 15}}>
            <PostIcon />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 15}}>
            <HeartIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <MessengerIcon />
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
