import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableProps } from "@branyl-acqualinea/react";

export default {
  title: "Form/Table",
  component: Table,
} as Meta<TableProps>;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  render: () => (
    <Table>
      <thead>
        <tr>
          <th>head 1</th>
          <th>head 2</th>
          <th>head 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>body 1</td>
          <td>body 2</td>
          <td>body 3</td>
        </tr>
        <tr>
          <td>body 1</td>
          <td>body 2</td>
          <td>body 3</td>
        </tr>
      </tbody>
    </Table>
  ),
};
