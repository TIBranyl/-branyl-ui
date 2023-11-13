import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@branyl-ui/react";
import { ArrowRight } from "phosphor-react";

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
    variant: {
      options: ["primary", "secondary", "success", "warning", "danger"],
      control: { type: "inline-radio" },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: "primaryOutline",
    children: "Button",
  },
  argTypes: {
    variant: {
      options: [
        "primaryOutline",
        "secondaryOutline",
        "successOutline",
        "warningOutline",
        "dangerOutline",
      ],
      control: { type: "inline-radio" },
    },
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

export const WithIconOutline: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
    variant: "primaryOutline",
  },
  argTypes: {
    variant: {
      options: [
        "primaryOutline",
        "secondaryOutline",
        "successOutline",
        "warningOutline",
        "dangerOutline",
      ],
      control: { type: "inline-radio" },
    },
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
