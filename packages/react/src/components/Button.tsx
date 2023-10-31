import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  boxSizing: "border-box",
  padding: "0 $4",
  color: "$white",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$indigo500",

        "&:not(:disabled):hover": {
          background: "$indigo300",
        },

        "&:disabled": {
          backgroundColor: "$indigo200",
          cursor: "not-allowed",
        },
      },

      secondary: {
        color: "$white",
        background: "$gray400",

        "&:not(:disabled):hover": {
          background: "$gray300",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
          cursor: "not-allowed",
        },
      },

      warning: {
        color: "$white",
        background: "$yellow500",

        "&:not(:disabled):hover": {
          background: "$yellow300",
        },

        "&:disabled": {
          backgroundColor: "$yellow200",
          cursor: "not-allowed",
        },
      },

      danger: {
        color: "$white",
        background: "$red500",

        "&:not(:disabled):hover": {
          background: "$red300",
        },

        "&:disabled": {
          backgroundColor: "$red200",
          cursor: "not-allowed",
        },
      },

      success: {
        color: "$white",
        background: "$green500",

        "&:not(:disabled):hover": {
          background: "$green300",
        },

        "&:disabled": {
          backgroundColor: "$green200",
          cursor: "not-allowed",
        },
      },

      primaryOutline: {
        color: "$indigo500",
        backgroundColor: "transparent",
        border: "1px solid $indigo500",

        "&:not(:disabled):hover": {
          color: "$white",
          backgroundColor: "$indigo500",
        },

        "&:disabled": {
          backgroundColor: "$indigo200",
          cursor: "not-allowed",
        },
      },

      secondaryOutline: {
        color: "$gray400",
        border: "1px solid $gray400",

        "&:not(:disabled):hover": {
          background: "$gray400",
          color: "$white",
        },

        "&:disabled": {
          backgroundColor: "$gray200",
          cursor: "not-allowed",
        },
      },

      warningOutline: {
        color: "$yellow500",
        border: "1px solid $yellow500",

        "&:not(:disabled):hover": {
          color: "$white",
          background: "$yellow500",
        },

        "&:disabled": {
          borderColor: "$yellow200",
          color: "$yellow200",

          cursor: "not-allowed",
        },
      },

      dangerOutline: {
        color: "$red500",
        border: "1px solid $red500",

        "&:not(:disabled):hover": {
          color: "$white",
          background: "$red500",
        },

        "&:disabled": {
          borderColor: "$red200",
          color: "$gray200",
          cursor: "not-allowed",
        },
      },

      successOutline: {
        color: "$green500",
        border: "1px solid $green500",

        "&:not(:disabled):hover": {
          color: "$white",
          background: "$green500",
        },

        "&:disabled": {
          borderColor: "$green200",
          color: "$green200",
          cursor: "not-allowed",
        },
      },
    },
    size: {
      sm: {
        height: 32,
        minWidth: 32,
      },

      md: {
        height: 46,
        minWidth: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = "Button";
