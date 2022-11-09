import React from "react";
import { TextInput as RNTextInput } from "react-native";
import { composeRestyleFunctions, createVariant, useRestyle, VariantProps } from "@shopify/restyle";
import { Theme } from "../theme/theme";
import Box from "./Box";

type TextInputProps = React.ComponentPropsWithRef<typeof RNTextInput> &
  VariantProps<Theme, "textInputVariants"> & {
    height?: number;
  };

const variant = createVariant<Theme, "textInputVariants">({
  themeKey: "textInputVariants",
});

const restyleFunctions = composeRestyleFunctions<Theme, TextInputProps>([variant]);

const TextInput = ({ ...rest }: TextInputProps) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <Box backgroundColor="grey" borderRadius={4} height={50} justifyContent="center" pl="s">
      <RNTextInput selectionColor='white' {...props} style={[props.style, { fontSize: 14 }]}/>
    </Box>
  );
};

export default TextInput;
