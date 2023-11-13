import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "@branyl-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {
    type: "checkbox",
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          {Story()}
          <label>It's a checkbox</label>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
};

export const WithIcon: StoryObj<CheckboxProps> = {
  args: {
    variant: "secondary",
  },
};
