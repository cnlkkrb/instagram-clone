import React, {useState} from 'react';
import Box from '../../components/Box';
import {Image, TouchableOpacity} from 'react-native';
import Text from '../../components/Text';
import DotIcon from '../../assets/icon/dot';
import PostImage from '../../components/PostImage';
import CommentIcon from '../../assets/icon/Comment';
import BookMarkIcon from '../../assets/icon/Bookmark';
import ShareIcon from '../../assets/icon/Share';
import ReadMore from '@fawazahmed/react-native-read-more';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {post} from '../../data/post';

dayjs.extend(relativeTime);

const Posts = () => {
  const [liked, setLiked] = useState(false);

  return (
    <Box mb="l">
      {post.map(item => {
        return (
          <Box>
            <Box mx="m" mt="l" mb="m" flexDirection="row" alignItems="center">
              <Image
                style={{width: 30, height: 30, borderRadius: 50}}
                source={item.user.avatar}
              />
              <Text variant="heading4" ml="s">
                {item.user.name}
              </Text>
              <Box style={{marginLeft: 'auto'}}>
                <DotIcon />
              </Box>
            </Box>
            <PostImage src={item.image} />
            <Box paddingHorizontal="m">
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                mt="s">
                <Box flexDirection="row">
                  <TouchableOpacity
                    onPress={() => setLiked((isLiked: any) => !isLiked)}>
                    {liked ? (
                      <AntDesign name="hearto" color={'white'} size={20} />
                    ) : (
                      <AntDesign name="heart" color={'red'} size={20} />
                    )}
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
                {liked ? item.likes : item.likes + 1} beğenme
              </Text>
              <ReadMore
                style={{color: 'white', fontSize: 14, fontWeight: '500'}}
                numberOfLines={3}
                seeMoreText="devamı"
                seeMoreStyle={{color: '#999'}}
                expandOnly={true}>
                {item.user.name} {item.description}
              </ReadMore>
              <Text mt="xs">12 yorumun tümünü göster</Text>
              <Box mt="xs" flexDirection="row" alignItems="center">
                <Text variant="small">{dayjs(item.date).fromNow()}</Text>
                <Text ml="s" variant="smallBold" color="white">
                  Çevirisine bak
                </Text>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Posts;
