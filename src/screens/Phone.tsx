import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Box from '../components/Box';
import Button from '../components/Button';
import PhoneInput from '../components/PhoneInput';
import Text from '../components/Text';

const Phone = ({navigation}: any) => {
  const [country, setCountry] = useState('+90');
  const [phone, setPhone] = useState('');

  return (
    <Box alignItems="center" flex={1} backgroundColor="mainBackground">
      <Box mb="m" mt="m" width={'85%'}>
        <PhoneInput
          placeholder="Telefon"
          value={phone}
          onChangeText={(phonenumber) => setPhone(phonenumber)}
          country={country}
          onSetCountry={setCountry}
        />
      </Box>
      <Text textAlign="center" variant="small">
        Güvenlik ve giriş amaçlarıyla bizden SMS bildirimleri {'\n'}{' '}
        alabilirsiniz.
      </Text>
      <Box width={'85%'} mt="m">
        <Button
          variant="primary"
          disabled={phone === ''}
          onPress={() => navigation.navigate('VerifySmsScreen', {phone,country})}
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
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

export default Phone;
