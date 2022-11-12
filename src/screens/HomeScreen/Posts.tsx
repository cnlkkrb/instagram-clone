import React from 'react';
import Box from '../../components/Box';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import Text from '../../components/Text';
import DotIcon from '../../assets/icon/dot';
import PostImage from '../../components/PostImage';
import HeartIcon from '../../assets/icon/Heart';
import CommentIcon from '../../assets/icon/Comment';
import BookMarkIcon from '../../assets/icon/Bookmark';
import ShareIcon from '../../assets/icon/Share';
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Posts = ({post}: any) => {
  return (
    <Box mb='l'>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height={49}
        paddingHorizontal={'m'}>
        <Box flexDirection="row" alignItems="center">
          <Image
            style={{width: 30, height: 30, borderRadius: 50}}
            source={post.user.avatar}
          />
          <Text variant="heading4" ml="s">
            {post.user.name}
          </Text>
        </Box>
        <DotIcon />
      </Box>
      <PostImage src={post.image} />
      <Box paddingHorizontal="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="s">
          <Box flexDirection="row">
            <TouchableOpacity>
              <HeartIcon />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 15}}>
              <CommentIcon />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 15}}>
              <ShareIcon />
            </TouchableOpacity>
          </Box>
          <TouchableOpacity>
            <BookMarkIcon />
          </TouchableOpacity>
        </Box>
        <Text mt="s" variant="heading4">
          {post.likes} beğenme
        </Text>
        <ReadMore
          style={{color: 'white', fontSize: 14, fontWeight: '500'}}
          numberOfLines={3}
          seeMoreText="devamı"
          seeMoreStyle={{color: '#999'}}
          expandOnly={true}>
          {post.user.name} {post.description}
        </ReadMore>
        <Text mt="xs">12 yorumun tümünü göster</Text>
        <Box mt='xs' flexDirection='row' alignItems='center'>
          <Text variant='small'>{dayjs(post.date).fromNow()}</Text>
          <Text ml='s' variant='smallBold' color='white'>Çevirisine bak</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Posts;
