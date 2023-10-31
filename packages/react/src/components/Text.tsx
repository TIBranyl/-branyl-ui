import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Text = styled("span", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$md",
  fontFamily: "$default",
  paddingBottom: "$2",
  color: "$slate800",

  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" },
    },
    variant: {
      primary: {},
      bigTitle: {
        fontWeight: "$medium",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        width: "$40",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType;
}

Text.displayName = "Card";
