import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Card = styled("div", {
  borderRadius: "$md",
  border: "1px solid $indigo100",
  maxWidth: "$64",
  minHeight: "$28",
  padding: "$4",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
});

export interface CardProps extends ComponentProps<typeof Card> {
  as?: ElementType;
}

Card.displayName = "Card";
