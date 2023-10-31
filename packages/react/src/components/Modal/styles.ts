import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  position: 'fixed',
  inset: 0,
  animation: 'overlayShadow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
})

export const Content = styled(Dialog.Content, {
  borderRadius: '$md',
  padding: '$4',
  backgroundColor: '$white',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  border: '0 none',
  outline: '0 none',
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
})