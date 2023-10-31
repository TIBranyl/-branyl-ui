import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@branyl-acqualinea/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    variant: "primary",
  },
  argTypes: {
    vairant: {
      option: ["bigTitle", "primary", "warning", "danger", "success"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const BigTittle: StoryObj<TextProps> = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu lacus, scelerisque sit amet neque ac, suscipit dictum tellus.",
    variant: "bigTitle",
  },
};
