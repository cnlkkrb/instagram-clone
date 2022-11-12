import React, {useState} from 'react';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import TextInput from '../components/TextInput';

const EmailVerify = ({navigation,route}: any) => {
  const [emailCode, setEmailCode] = useState('');

  return (
    <Box alignItems="center" flex={1} backgroundColor="mainBackground">
      <Text mt='xl' variant='heading3'>ONAY KODUNU GİR</Text>
      <Text mt='l' textAlign='center' color='white'>Şuraya gönderdiğimiz onay kodunu gir: {route.params.email}</Text>
      <Box mb="m" mt="l" width={'85%'}>
        <TextInput
          placeholderTextColor="grey"
          placeholder="Giriş kodu"
          onChangeText={setEmailCode}
          numberOfLines={1}
        />
      </Box>
      <Box width={'85%'}>
        <Button
          variant="primary"
          disabled={emailCode === ''}
          onPress={() => navigation.navigate('UserSynchronizedScreen')}
          label={'İleri'}
        />
      </Box>
    </Box>
  );
};

export default EmailVerify;
