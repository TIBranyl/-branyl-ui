import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps, Button } from "@branyl-ui/react";

export default {
  title: "Form/Badge",
  component: Badge,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "warning", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
} as Meta<BadgeProps>;

export const Primary: StoryObj<BadgeProps> = {
  args: {
    variant: "primary",
    dataBadge: " ",
    size: "sm",
  },
};

export const WithContent: StoryObj<BadgeProps> = {
  args: {
    variant: "danger",
    dataBadge: "99",
    size: "lg",
  },
};

export const WithButton: StoryObj<BadgeProps> = {
  args: {
    variant: "primary",
    children: <Button variant="secondary">Button</Button>,
    size: "sm",
  },
};
