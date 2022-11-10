import React, { useState } from "react";
import { TextInput as RNTextInput } from "react-native";
import TextInput from "./PhoneTextInput";
import Box from "./Box";
import CountryPicker, { Country, CountryCode, DARK_THEME } from "react-native-country-picker-modal";
import Divider from "./Divider";


type Props = React.ComponentPropsWithRef<typeof RNTextInput> & {
  country: string;
  onSetCountry: (country: string) => void;
};

const PhoneInput = ({ onSetCountry, ...props }: Props) => {
  const [countryCode, setCountryCode] = useState<CountryCode>("TR");
  const [country, setCountry] = useState<string>(props.country);
  return (
    <Box flexDirection="row" alignItems="center" borderRadius={8}>
      <Box
        flexDirection="row"
        backgroundColor="grey"
        height="100%"
        pl="m"
        alignItems="center"
        borderTopLeftRadius={8}
        borderBottomLeftRadius={8}>
        <CountryPicker
          countryCode={countryCode}
          withCallingCode
          withCallingCodeButton
          withFlagButton={false}
          withCountryNameButton
          theme={DARK_THEME}
          onSelect={(c: Country) => {
            setCountryCode(c.cca2);
            setCountry(`+${c.callingCode[0]}`);
            onSetCountry(`+${c.callingCode[0]}`);
          }}
        />
        <Box style={{transform: [{rotate: '90deg'}]}} backgroundColor='mainBackground' width={30}>
          <Divider backgroundColor='mainBackground' width={1}/>
        </Box>
      </Box>
      <Box flex={1}>
        <TextInput
          variant="primary"
          label="Mobile number"
          keyboardType="phone-pad"
          prefix={country || ""}
          keepFocus
          {...props}
        />
      </Box>
    </Box>
  );
};

export default PhoneInput;