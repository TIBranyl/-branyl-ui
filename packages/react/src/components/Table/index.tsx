import { forwardRef, HTMLAttributes } from "react";
import { TableRoot } from "./styles";

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, ...props }: TableProps, ref) => {
    return <TableRoot {...props}>{children}</TableRoot>;
  }
);

Table.displayName = "Table";
