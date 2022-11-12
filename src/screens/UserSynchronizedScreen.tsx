import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import TextInput from '../components/TextInput';
import CheckBox from '@react-native-community/checkbox';
import theme from '../theme/theme';

const UserSynchronizedScreen = ({navigation}: any) => {
  const [name,setName] = useState('')
  const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box alignItems="center">
        <Text mt="medium" mx="m" textAlign="center" variant="heading3">
          AD VE ŞİFRE
        </Text>
        <Box mb="m" mt="l" width={'85%'}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Adın ve soyadın"
            onChangeText={setName}
            numberOfLines={1}
          />
        </Box>
        <Box mb="m" width={'85%'}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Şifre"
            onChangeText={setPassword}
            numberOfLines={1}
          />
        </Box>
      </Box>
      <Box ml='l' flexDirection="row" alignItems="center">
        <CheckBox
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColors={{true: theme.colors.blue, false: 'grey'}}
        />
        <Text variant="small">Şifreyi hatırla</Text>
      </Box>
      <Box mt='m' alignItems="center">
        <Box width={'85%'}>
          <Button
            variant="primary"
            disabled={name === '' || password === ''}
            onPress={() => {}}
            label={'Devam Et ya da Kişileri Senkronize Et'}
          />
        </Box>
        <TouchableOpacity disabled={name === '' || password === ''}>
          <Text mt="l" color={name === '' || password === '' ? 'grey' : 'blue'} variant="heading4">
            Kişileri Senkronize Etmeden Devam Et
          </Text>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default UserSynchronizedScreen;
