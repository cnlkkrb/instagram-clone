import React from "react";
import {
  TextInput as RNTextInput,
  Platform,
} from "react-native";
import { composeRestyleFunctions, createVariant, useRestyle, VariantProps } from "@shopify/restyle";
import { Theme } from "../theme/theme";
import Box from "./Box";

type TextInputProps = React.ComponentPropsWithRef<typeof RNTextInput> &
  VariantProps<Theme, "textInputVariants"> & {
    label?: string;
    prefix?: string;
    keepFocus?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
    statusMessage?: string;
    height?: number;
  };

const variant = createVariant<Theme, "textInputVariants">({
  themeKey: "textInputVariants",
});

const restyleFunctions = composeRestyleFunctions<Theme, TextInputProps>([variant]);

const TextInput = ({ ...rest }: TextInputProps) => {
  const props = useRestyle(restyleFunctions, rest);

  const getBorderWidth = (() => {
    return props.isSuccess || props.isError ? 1 : 0;
  })();

  const androidTextInputStyle =
    Platform.OS === "android"
      ? {
          padding: 0,
          lineHeight: 16,
          fontSize: 13,
          height: 22,
        }
      : {};
  return (
    <Box
      backgroundColor="grey"
      borderTopRightRadius={8}
      borderBottomRightRadius={8}
      borderWidth={getBorderWidth}
      height={55}
      justifyContent='center'
    >
      <Box flexDirection="row" alignItems="center">
        <RNTextInput
          {...props}
          ref={props.ref}
          style={[
            props.style,
            { color: "white", ...androidTextInputStyle },
            props.height ? { height: props.height - 50 } : undefined,
          ]}
        />
      </Box>
    </Box>
  );
};

export default TextInput;
