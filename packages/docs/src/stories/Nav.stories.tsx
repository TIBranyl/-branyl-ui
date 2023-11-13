import type { Meta, StoryObj } from "@storybook/react";
import { Navbars, NavProps } from "@branyl-ui/react";

export default {
  title: "Navigation / Navbars",
  component: Navbars,
  args: {
    children: "Navbars",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "warning", "danger"],
      control: { type: "inline-radio" },
    },
    allign: {
      options: ["center", "left", "right", "between"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<NavProps>;

export const Primary: StoryObj<NavProps> = {
  args: {
    variant: "primary",
    allign: "left",
  },
};
