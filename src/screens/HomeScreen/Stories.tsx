import React from 'react';
import Box from '../../components/Box';
import LinearGradient from 'react-native-linear-gradient';
import {storie} from '../../data/user';
import {Image, ScrollView, StyleSheet} from 'react-native';
import Text from '../../components/Text';

const Stories = () => {
  return (
    <Box paddingVertical='s' borderBottomColor='grey' borderBottomWidth={0.5}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {storie.map((item,index) => {
          return (
            <Box key={index} width={60} alignItems='center' marginHorizontal={'s'}>
              <LinearGradient
                style={styles.gradient}
                colors={['#A11392', '#F7A34B', '#EFAC59']}>
                <Image
                key={index}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: 'white',
                  }}
                  source={item.image}
                />
              </LinearGradient>
              <Text key={index} variant='small' color='white' numberOfLines={1}>{item.name}</Text>
            </Box>
          );
        })}
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
});

export default Stories;
