import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectProps } from "@branyl-ui/react";

export default {
  title: "Form/Select",
  component: Select,
  args: {
    options: [
      {
        key: "1",
        value: "Value 1",
        label: "Label 1",
      },
      {
        key: "2",
        value: "Value 2",
        label: "Label 2",
      },
      {
        key: "3",
        value: "Value 3",
        label: "Label 3",
      },
    ],
  },
} as Meta<SelectProps>;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};

export const Asynchronous: Story = {
  args: {
    isAsync: true,
    loadOptions: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              key: "1",
              value: "Value 1",
              label: "Label 1",
            },
            {
              key: "2",
              value: "Value 2",
              label: "Label 2",
            },
            {
              key: "3",
              value: "Value 3",
              label: "Label 3",
            },
            {
              key: "4",
              value: "Value 1",
              label: "Label 1",
            },
            {
              key: "5",
              value: "Value 2",
              label: "Label 2",
            },
            {
              key: "6",
              value: "Value 3",
              label: "Label 3",
            },
            {
              key: "7",
              value: "Value 1",
              label: "Label 1",
            },
            {
              key: "8",
              value: "Value 2",
              label: "Label 2",
            },
            {
              key: "9",
              value: "Value 3",
              label: "Label 3",
            },
            {
              key: "10",
              value: "Value 1",
              label: "Label 1",
            },
            {
              key: "11",
              value: "Value 2",
              label: "Label 2",
            },
            {
              key: "12",
              value: "Value 3",
              label: "Label 3",
            },
          ]);
        }, 10000);
      }),
    noOptionsMessage: "No options",
    loadingMessage: "Loading...",
    placeholder: "Search Something",
  },
};
