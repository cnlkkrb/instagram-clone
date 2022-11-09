import { createBox, createRestyleComponent, createVariant, VariantProps } from "@shopify/restyle";
import { Theme } from "../theme/theme";

export const restyleBox = createBox<Theme>();

type Props = VariantProps<Theme, "boxVariants"> & React.ComponentProps<typeof restyleBox>;

const Box = createRestyleComponent<Props, Theme>([createVariant({ themeKey: "boxVariants" })], restyleBox);

export default Box;
