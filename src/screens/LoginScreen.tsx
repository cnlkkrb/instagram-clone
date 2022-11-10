import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import FacebookIcon from '../assets/img/facebook-logo';
import Box from '../components/Box';
import Button from '../components/Button';
import Divider from '../components/Divider';
import Text from '../components/Text';
import TextInput from '../components/TextInput';

const LoginScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      flex={1}
      backgroundColor="mainBackground">
      <Text mt="xxl" variant="heading1" color="white">
        Instagram
      </Text>
      <Box mb="m" mt="l" width={'85%'}>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Telefon numarası, e-posta adresi veya kullanıcı adı"
          onChangeText={setUsername}
          numberOfLines={1}
        />
      </Box>
      <Box width={'85%'}>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Şifre"
          secureTextEntry
          onChangeText={setPassword}
        />
      </Box>
      <Box width={'85%'} mt="m">
        <Button
          variant="primary"
          disabled={username === '' || password === ''}
          onPress={() => {}}
          label={'Giriş Yap'}
        />
      </Box>
      <Box mt="s" flexDirection="row">
        <Text variant="small">Giriş detaylarını mı unuttun? </Text>
        <TouchableOpacity>
          <Text color="white" variant="small">
            Giriş yapmak için yardım al.
          </Text>
        </TouchableOpacity>
      </Box>
      <Box mt="l" flexDirection="row" alignItems="center">
        <Box mr="s" width={'35%'}>
          <Divider backgroundColor='grey' width={1} />
        </Box>
        <Text variant="heading4">YA DA</Text>
        <Box ml="s" width={'35%'}>
          <Divider backgroundColor='grey' width={1} />
        </Box>
      </Box>
      <Box mt="l" flexDirection="row" alignItems="center">
        <FacebookIcon />
        <TouchableOpacity>
          <Text variant="heading4" color="blue">
            Facebook ile Giriş Yap
          </Text>
        </TouchableOpacity>
      </Box>

      <Box width={'100%'} flexGrow={1}>
        <Box
          alignItems="flex-end"
          flexGrow={1}
          flexDirection="row">
          <Box
            flexDirection="row"
            justifyContent="center"
            borderTopWidth={1}
            borderTopColor="grey"
            width={'100%'}
            padding="m">
            <Text variant="small">Hesabın yok mu?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text ml="xs" color="white" variant="smallBold">
                Kaydol.
              </Text>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen;
