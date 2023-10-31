import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalProps } from "@branyl-acqualinea/react";
import { X } from "phosphor-react";

export default {
  title: "Form/Modal",
  component: Modal,
  args: {
    width: "50%",
    height: "50%",
    close: <X size={22} />,
    modalTitle: "Modal Title",
    description: <div>Modal Description</div>,
    icon: <div>Open Modal</div>,
  },
} as Meta<ModalProps>;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  render: () => (
    <Modal
      icon={<div>Open Modal</div>}
      width="50%"
      height="50%"
      close={<X size={22} />}
      modalTitle={"Modal Title"}
      description={<div>Modal Description</div>}
    >
      <div>Modal Content</div>
    </Modal>
  ),
};
