import { styled } from "../styles";
import { ComponentProps, ElementType } from "react";

export const Navbars = styled("header", {
  display: "flex",
  alignItems: "center",
  minHeight: "$12",
  width: "100%",
  padding: "$4",

  variants: {
    variant: {
      primary: {
        backgroundColor: "$indigo200",
      },
      secondary: {
        backgroundColor: "$gray200",
      },
      warning: {
        backgroundColor: "$yellow200",
      },
      success: {
        backgroundColor: "$green200",
      },
      danger: {
        backgroundColor: "$red200",
      },
    },
    allign: {
      center: {
        justifyContent: "center",
      },
      left: {
        justifyContent: "flex-start",
      },
      right: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    allign: "between",
  },
});

export interface NavProps extends ComponentProps<typeof Navbars> {}

Navbars.displayName = "Nav";
