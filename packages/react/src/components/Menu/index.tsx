import {
  ComponentProps,
  forwardRef,
  ElementRef,
  InputHTMLAttributes,
} from "react";
import { Text } from "../Text";
import { Button, ButtonProps } from "../Button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Arrow, Content, Item } from "./styles";

interface ContentInterface {
  icon?: JSX.Element;
  title?: string;
  variantItem?: "primary" | "warning" | "danger";
  handleClick?: () => void;
}

interface MenuProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "icon" | "content"> {
  icon?: string | JSX.Element;
  content?: ContentInterface[];
}

export interface MenuInterface extends MenuProps {
  text?: string;
  as?: keyof JSX.IntrinsicElements;
  variant?: ButtonProps["variant"];
  side?: "top" | "right" | "bottom" | "left";
}

export const Menu = forwardRef<ElementRef<typeof Button>, MenuProps>(
  (
    { icon, content, variant, side, as = "input", ...props }: MenuInterface,
    ref
  ) => {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant={variant}>{!!icon && icon}</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <Content sideOffset={5} side={side}>
            <Arrow />
            <DropdownMenu.Group>
              {content?.map((content, index) => {
                return (
                  <Item
                    key={index}
                    variant={content.variantItem}
                    onClick={content.handleClick}
                  >
                    {content.icon && content.icon}{" "}
                    {content.title && content.title}
                  </Item>
                );
              })}
            </DropdownMenu.Group>
          </Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  }
);

Menu.displayName = "FormText";
