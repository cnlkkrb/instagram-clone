import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import Box from '../../components/Box';
import SearchBar from '../../components/SearchBar';
import Text from '../../components/Text';
import theme from '../../theme/theme';

const MessageScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: theme.colors.mainBackground}}>
      <Box mx="m" mt="s">
        <SearchBar placeholder='Ara'/>
        <Box mt='s' justifyContent="space-between" flexDirection="row">
          <Text variant="heading4">Mesajlar</Text>
          <TouchableOpacity>
            <Text variant="medium" color="blue">
              İstekler
            </Text>
          </TouchableOpacity>
        </Box>
        <Text mt="xl" textAlign="center" variant="heading2thin">
          Arkadaşlarına Mesaj Gönder
        </Text>
        <Text mt="m" textAlign="center">
          Önemsediğin kişilere doğrudan mesaj {'\n'} gönder,bu kişileri
          görüntülü ara ve en {'\n'} sevdiğin gönderini paylaş.
        </Text>
        <Text mt="m" textAlign="center">
          Instagram ve Facebook kullanan kişiler {'\n'} uygulamalar arasında
          sohbet edebilir.{'\n'}Kimlerden haber almak istediğine karar {'\n'}{' '}
          vermek için ayarlardaki Mesaj Kontrolleri'ni{'\n'} kullan.
        </Text>
        <Text textAlign="center" color="white">
          Gizliliğin hakkında daha fazla bilgi al
        </Text>
        <TouchableOpacity>
          <Text mt="m" textAlign="center" variant="heading4" color="blue">
            Mesaj Gönder
          </Text>
        </TouchableOpacity>
      </Box>
    </ScrollView>
  );
};

export default MessageScreen;
