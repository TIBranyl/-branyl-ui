import { ComponentProps } from "react";
import { styled } from "../styles";

export const TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray300",

  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  resize: "none",
  minHeight: 80,

  "&:focus": {
    outline: 0,
    borderColor: "$gray400",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray400",
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = "TextArea";
