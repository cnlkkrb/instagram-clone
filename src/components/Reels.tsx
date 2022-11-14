import React, {useState} from 'react';
import Box from './Box';
import Text from './Text';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {video} from '../data/video/video';
import SingleReel from './SingleReel';

const Reels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChandeValue = ({index}: any) => {
    setCurrentIndex(index);
  };
  return (
    <SwiperFlatList
    vertical={true}
    onChangeIndex={handleChandeValue}
      data={video}
      renderItem={({item, index}) => (
        <SingleReel currentIndex={currentIndex} item={item} index={index} />
      )}
      keyExtractor={({item,index}) => index}
    />
  );
};

export default Reels;
