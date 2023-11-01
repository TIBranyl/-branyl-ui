import type { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuInterface } from "@branyl-ui/react";
import { Copy, Eye, FilePdf, Gear } from "phosphor-react";

export default {
  title: "Form/Menu",
  component: Menu,
  args: {
    icon: <Gear size={24} />,
    content: [
      {
        icon: <Eye />,
        title: "Visualizar Pedido",
        variantItem: "primary",
      },
      {
        icon: <Copy />,
        title: "Duplicar Pedido",
        variantItem: "warning",
      },
      {
        icon: <FilePdf />,
        title: "Gerar Pdf",
        variantItem: "danger",
      },
    ],
    variant: "primaryOutline",
    side: "right",
  },
} as Meta<MenuInterface>;

export const Primary: StoryObj<MenuInterface> = {};
