import ReadMore from '@fawazahmed/react-native-read-more'
import React, { useState } from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BookMarkIcon from '../../assets/icon/Bookmark'
import CommentIcon from '../../assets/icon/Comment'
import DotIcon from '../../assets/icon/dot'
import ShareIcon from '../../assets/icon/Share'
import Box from '../../components/Box'
import Text from '../../components/Text'
import { post } from '../../data/post'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import theme from '../../theme/theme'

dayjs.extend(relativeTime);

const DiscoverScreen = ({route}: any) => {
    const [liked, setLiked] = useState(false);
  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.colors.mainBackground}}>
        {post.map((item,index) => {
        return (
          <Box key={index}>
            <Box mx="m" mt="l" mb="m" flexDirection="row" alignItems="center">
              <Image
                style={{width: 30, height: 30, borderRadius: 50}}
                source={item.user.avatar}
              />
              <Text variant="heading4" ml="s">
                {item.user.name}
              </Text>
              <Box flexDirection='row' alignItems='center' style={{marginLeft: 'auto'}}>
              <TouchableOpacity
                style={{
                  width: 75,  
                  height: 30,
                  backgroundColor: theme.colors.grey,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 15
                }}>
                <Text variant="smallBold">Takip Et</Text>
              </TouchableOpacity>
                <DotIcon />
              </Box>
            </Box>
            <Image resizeMode='cover' style={{width: '100%', height: 300}} source={route.params.imageData}/>
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
    </ScrollView>
  )
}

export default DiscoverScreen

