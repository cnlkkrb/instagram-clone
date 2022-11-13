import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Text from '../../components/Text';
import {randomUser} from '../../data/randomUser';
import theme from '../../theme/theme';

const NotificationScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.colors.mainBackground}}>
      <Box mx="m" mt="s">
        <Text variant="heading3">Sizin için öneriler</Text>
        {randomUser.map((item, index) => {
          return (
            <Box flexDirection="row" alignItems="center" mt="l" key={index}>
              <Image
                style={{width: 60, height: 60, borderRadius: 50}}
                source={item.photo}
              />
              <Box ml="m" justifyContent="center" flexDirection="column">
                <Box flexDirection="row" alignItems="center">
                  <Text mr="xs" variant="heading4">
                    {item.name}
                  </Text>
                  <Image
                    style={{width: 13, height: 13}}
                    source={require('../../assets/img/blue-tick.png')}
                  />
                </Box>
                <Text variant="small">{item.realName}</Text>
                <Text mt="s" variant="verySmall">
                  {item.description}
                </Text>
              </Box>
              <TouchableOpacity
                style={{
                  width: '25%',
                  height: 30,
                  backgroundColor: theme.colors.blue,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 'auto',
                }}>
                <Text variant="heading4">Takip Et</Text>
              </TouchableOpacity>
              <Text ml="m" mr="s" variant="smallBold">
                X
              </Text>
            </Box>
          );
        })}
      </Box>
    </ScrollView>
  );
};

export default NotificationScreen;
