import { ComponentProps, ElementType } from "react";
import { styled } from "../../styles";

export const Checkbox = styled("input", {
  variants: {
    variant: {
      primary: {},
      secondary: {
        '&[type="checkbox"]': {
          appearance: "none",
          position: "relative",
          width: "20px",
          height: "20px",
          border: "2px solid $gray300",
          borderRadius: "15px",
          backgroundColor: "$white",
          cursor: "pointer",
        },

        '&[type="checkbox"]:checked': {
          backgroundColor: "$green500",
          border: "2px solid $green500",
        },

        '&[type="checkbox"]:checked::before': {
          content: "",
          display: "block",
          position: "absolute",
          top: "3px",
          left: "5px",
          width: "5px",
          height: "8px",
          border: "solid $white",
          borderWidth: "0 2px 2px 0",
          transform: "rotate(45deg)",
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export interface CheckboxProps extends ComponentProps<typeof Checkbox> {
  as?: ElementType;
}

Checkbox.displayName = "Checkbox";
