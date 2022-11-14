import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import Box from '../../components/Box';
import SearchBar from '../../components/SearchBar';
import theme from '../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { post2 } from '../../data/post2';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.colors.mainBackground}}>
      <Box mx="m" mt="s" flex={1} width={'90%'} flexDirection="row" alignItems="center">
        <Box flex={1}>
          <SearchBar placeholder="Ara" />
        </Box>
        <Box>
            <Ionicons style={{marginLeft: 20}} name="md-person-add-outline" size={20} color="white" />
        </Box>
      </Box>
      {
        post2.map((item,index) => {
            return(
                <>
                    {item.id === 1 ? (
                        <Box flexDirection='row' flexWrap='wrap' justifyContent='space-between'>
                            {item.images.map((imageData,imgIndex) => {
                                return(
                                <TouchableOpacity onPress={() => navigation.navigate('Keşfet', {imageData})} style={{paddingBottom: 2}}>
                                    <Image style={{width: 119, height: 150}} source={imageData}/>
                                </TouchableOpacity>
                                )
                            })}
                        </Box>
                    ) : null}
                </>
            )
        })
      }
    </ScrollView>
  );
};

export default SearchScreen;
