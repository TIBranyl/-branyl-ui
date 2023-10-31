import { styled } from '../../styles'
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Content = styled(DropdownMenu.Content, {
  minWidth: 150,
  backgroundColor: '$white',
  borderRadius: '$sm',
  padding: '$1',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
})

export const Item = styled(DropdownMenu.Item, {
  font: '$default',
  fontSize: '$md',
  lineHeight: '$md',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$8',
  outline: 'none',
  gap: '$2',

  '&:hover': {
    backgroundColor: '$indigo500',
    color: '$white',
    cursor: 'pointer',
  },

  svg: {
    width: '$5',
    height: '$5',
  },

  variants: {
    variant: {
      primary: {
        '&:hover': {
          backgroundColor: '$indigo500',
          color: '$white',
          cursor: 'pointer',

          svg: {
            color: '$white'
          }
        },

        svg: {
          color: '$indigo500'
        }
      },
      warning: {
        '&:hover': {
          backgroundColor: '$yellow500',
          svg: {
            color: '$white'
          }
        },

        svg: {
          color: '$yellow500'
        }
      },
      danger: {
        '&:hover': {
          backgroundColor: '$red500',
          svg: {
            color: '$white'
          }
        },

        svg: {
          color: '$red500'
        }
      },
    }
  }
})

export const Arrow = styled(DropdownMenu.Arrow, {
  fill: '$white',
})