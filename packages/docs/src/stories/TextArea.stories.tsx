import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextArea, TextAreaProps } from "@branyl-ui/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "$2" }}>
          <Text size="sm">Observations : </Text>
          {Story()}
        </div>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
