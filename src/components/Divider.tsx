import Box from "./Box";
import React from "react";

type Props = {
  width: number;
  backgroundColor: string;
}

const Divider = ({width, backgroundColor}: Props) => {
  return (
    <Box
      borderBottomColor={backgroundColor}
      borderBottomWidth={width}
    />
  );
};

export default Divider;
