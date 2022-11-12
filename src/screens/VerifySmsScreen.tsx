import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import TextInput from '../components/TextInput';

const VerifySmsScreen = ({navigation,route}: any) => {
  const [email, setEmail] = useState('');

  return (
    <Box alignItems="center" flex={1} backgroundColor="mainBackground">
      <Box></Box>
      <Text mt="medium" mx="m" textAlign="center" variant="heading5">
        {route.params.country}{' '}{route.params.phone}{' '}Numaralı Telefona Gönderdiğiniz Onay Kodunu Gir
      </Text>
      <Text mt="m" textAlign='center' variant="smallBold" color="white">
        Telefon numarasını değiştir{' '}
        <Text variant="small" color="ligthgrey">
          veya{' '}
        </Text>
        <Text variant="smallBold" color="white">
          SMS'i {'\n'} yeniden gönder
        </Text>
      </Text>
      <Box mb="m" mt="l" width={'85%'}>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Giriş kodu"
          onChangeText={setEmail}
          numberOfLines={1}
        />
      </Box>
      <Box width={'85%'}>
        <Button
          variant="primary"
          disabled={email === ''}
          onPress={() => navigation.navigate('UserSynchronizedScreen')}
          label={'İleri'}
        />
      </Box>
      <Box width={'100%'} flexGrow={1}>
        <Box alignItems="flex-end" flexGrow={1} flexDirection="row">
          <Box
            flexDirection="row"
            justifyContent="center"
            borderTopWidth={1}
            borderTopColor="grey"
            width={'100%'}
            padding="m">
            <Text variant="small">Hesabın zaten var mı?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text ml="xs" color="white" variant="smallBold">
                Giriş yap.
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VerifySmsScreen;
