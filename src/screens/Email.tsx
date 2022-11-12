import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import TextInput from '../components/TextInput';

const Email = ({navigation}: any) => {

  const [email, setEmail] = useState('');

  return (
    <Box
      alignItems="center"
      flex={1}
      backgroundColor="mainBackground">
      <Box mb="m" mt="l" width={'85%'}>
        <TextInput
          placeholderTextColor="grey"
          placeholder="E-posta"
          onChangeText={setEmail}
          numberOfLines={1}
        />
      </Box>
      <Box width={'85%'}>
        <Button
          variant="primary"
          disabled={email === ''}
          onPress={() => navigation.navigate('EmailVerify', {email})}
          label={'İleri'}
        />
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
            <Text variant="small">Hesabın zaten var mı?</Text>
            <TouchableOpacity onPress={() => navigation.pop(2)}>
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

export default Email;
