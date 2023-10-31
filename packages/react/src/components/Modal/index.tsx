import { forwardRef, HTMLAttributes } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Close, Content, Overlay } from "./styles";

export interface ModalProps {
  icon?: string | JSX.Element;
  modalTitle?: string | JSX.Element;
  description?: string | JSX.Element;
  children?: React.ReactNode;
  close?: string | JSX.Element;
  width?: string;
  height?: string;
}
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      icon,
      modalTitle,
      description,
      close,
      width,
      height,
      ...props
    }: ModalProps,
    ref
  ) => {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>{icon}</Dialog.Trigger>
        <Dialog.Portal>
          <Overlay />
          <Content {...props} style={{ width: width, height: height }}>
            {!!modalTitle && <Dialog.Title>{modalTitle}</Dialog.Title>}
            {!!description && (
              <Dialog.Description>{description}</Dialog.Description>
            )}
            {!!close && <Close asChild>{close}</Close>}
            {children}
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
);

Modal.displayName = "Modal";
