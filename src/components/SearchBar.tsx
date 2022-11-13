import React, { useRef } from 'react'
import { TextInput } from 'react-native';
import SearchIcon from '../assets/icon/search';
import Box from './Box'

const SearchBar = ({placeholder,onChange}: any) => {

    const inputRef = useRef();
    return (
      <Box
        height={40}
        borderRadius={8}
        backgroundColor="grey"
        mb="s"
        alignItems="center"
        flexDirection="row"
        pl="m"
        mt="s"
        onTouchEnd={() => {}}>
        <SearchIcon fillOpacity={0.6} width={18}/>
        <TextInput
          ref={inputRef}
          onChangeText={onChange}
          placeholderTextColor="#A8A8A8"
          placeholder={placeholder}
          style={{ marginLeft: 10, color: "white", fontSize: 16, flex: 1 }}
        />
      </Box>
    );
}

export default SearchBar