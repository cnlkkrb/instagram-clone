import {Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import Box from './Box';
import Video from 'react-native-video';
import Text from './Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HeartIcon from '../assets/icon/Heart';
import CommentIcon from '../assets/icon/Comment';
import ShareIcon from '../assets/icon/Share';
import DotIcon from '../assets/icon/dot';

const SingleReel = ({item, index, currentIndex}: any) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const videoRef = useRef(null);

  const onBuffer = (buffer: any) => {
    console.log(buffer);
  };
  const onError = (error: any) => {
    console.log(error);
  };

  return (
    <Box width={width} height={height} position="relative">
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={false}
          source={item.video}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <Box
        position="absolute"
        width={width}
        zIndex={1}
        bottom={60}
        padding={'s'}>
        <Box>
          <TouchableOpacity style={{width: 150}}>
            <Box width={100} flexDirection="row" alignItems="center">
              <Box width={32} height={32} borderRadius={100} margin="s">
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                    backgroundColor: 'white',
                  }}
                  source={item.postProfile}
                />
              </Box>
              <Text variant="heading4">{item.title}</Text>
            </Box>
          </TouchableOpacity>
          <Text marginHorizontal="s" variant="small" color="white">
            {item.description}
          </Text>
          <Box flexDirection="row" padding="s">
            <AntDesign name="sound" size={20} color="white" />
            <Text ml="s" variant="small" color="white">
              {item.soundName}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        bottom={80}
        right={0}
        alignItems="center"
        flexDirection="column"
        >
        <TouchableOpacity style={{padding: 10}}>
          <AntDesign name="hearto" size={25} color="white" />
        </TouchableOpacity>
        <Text variant="smallBold" color="white">
          {item.likes}
        </Text>
        <TouchableOpacity style={{padding: 10,marginTop: 10}}>
          <CommentIcon color="white" />
        </TouchableOpacity>
        <Text variant="smallBold" color="white">
          {item.comment}
        </Text>
        <TouchableOpacity style={{padding: 10,marginTop: 10}}>
          <ShareIcon color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10, marginTop: 5}}>
          <DotIcon style={{transform: [{rotateZ: '90deg'}]}} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 8,
              marginTop: 10
            }}
            source={item.postProfile}
          />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default SingleReel;
