import { ComponentProps } from "react";
import { styled } from "../styles";

export const Badge = styled("div", {
  position: "relative",
  display: "inline-flex",

  "&::after": {
    content: "attr(dataBadge)",
    position: "absolute",
    right: -10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "$full",
    color: "$white",
    fontWeight: "$medium",
  },

  variants: {
    variant: {
      primary: {
        "&::after": {
          backgroundColor: "$indigo500",
        },
      },
      secondary: {
        "&::after": {
          backgroundColor: "$gray400",
        },
      },
      success: {
        "&::after": {
          backgroundColor: "$green500",
        },
      },
      warning: {
        "&::after": {
          backgroundColor: "$yellow500",
        },
      },
      danger: {
        "&::after": {
          backgroundColor: "$red500",
        },
      },
    },

    size: {
      sm: {
        "&::after": {
          width: "$2",
          height: "$2",
          fontSize: "$xxs",
          right: -10,
        },
      },
      md: {
        "&::after": {
          width: "$3",
          height: "$3",
          fontSize: "$xxs",
          padding: "$1",
          right: -14,
        },
      },
      lg: {
        "&::after": {
          width: "$3",
          height: "$3",
          fontSize: "$xxs",
          padding: "0.6rem",
          right: -20,
          top: -6,
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export interface BadgeProps extends ComponentProps<typeof Badge> {}

Badge.displayName = "Badge";
