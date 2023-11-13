import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "@branyl-ui/react";

export default {
  title: "Data Display/Card",
  component: Card,
  args: {
    children: (
      <>
        <div
          style={{
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <span>Text A</span>
          <span>Text B</span>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <span>Text A</span>
          <span>Text B</span>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <span>Text A</span>
          <span>Text B</span>
        </div>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<CardProps>;

export const Primary: StoryObj<CardProps> = {};
