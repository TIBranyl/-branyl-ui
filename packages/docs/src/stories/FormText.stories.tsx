import type { Meta, StoryObj } from "@storybook/react";
import { FormText, FormTextProps } from "@branyl-ui/react";
import { MagnifyingGlass } from "phosphor-react";

export default {
  title: "Form/Form Text",
  component: FormText,
  args: {},
} as Meta<FormTextProps>;

export const Primary: StoryObj<FormTextProps> = {
  args: {
    placeholder: "Type your name",
    text: "Name:",
  },
};

export const WithPrefix: StoryObj<FormTextProps> = {
  args: {
    prefix: <MagnifyingGlass size={22} />,
  },
};
