import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@branyl-ui/react";
import { ArrowRight, ArrowsClockwise } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
  argTypes: {
    vairant: {
      option: ["primary", "secondary", "warning", "danger", "success"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const PrimaryOutline: StoryObj<ButtonProps> = {
  args: {
    variant: "primaryOutline",
    children: "Button",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const SecondaryOutline: StoryObj<ButtonProps> = {
  args: {
    variant: "secondaryOutline",
    children: "Button",
  },
};

export const Warning: StoryObj<ButtonProps> = {
  args: {
    variant: "warning",
    children: "Button",
  },
};

export const WarningOutline: StoryObj<ButtonProps> = {
  args: {
    variant: "warningOutline",
    children: "Button",
  },
};

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: "danger",
    children: "Button",
  },
};

export const DangerOutline: StoryObj<ButtonProps> = {
  args: {
    variant: "dangerOutline",
    children: "Button",
  },
};

export const Success: StoryObj<ButtonProps> = {
  args: {
    variant: "success",
    children: "Button",
  },
};

export const SuccessOutline: StoryObj<ButtonProps> = {
  args: {
    variant: "successOutline",
    children: "Button",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Clean: StoryObj<ButtonProps> = {
  args: {
    children: <ArrowsClockwise weight="bold" />,
    size: "md",
    variant: "warning",
  },
};
