import { styled } from '../../styles'

export const FormTextContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$1 $2',
  borderRadius: '$md',
  backgroundColor: 'transparent',
  border: '1px solid $gray300',
  gap: '$2',
  minWidth: '270px',
  height: '40px',

  '&:has(input:focus)': {
    borderColor: '$gray400',

    div: {
      borderColor: '$gray400',

      svg: {
        color: '$gray400',
      }
    }
  },


  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Prefix = styled('div', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  height: '100%',
  borderRight: '1px solid $gray300',
  padding: '$1 $2',
  width: '$8',

  svg: {
    color: '$gray300',
  },
})

export const Input = styled('input', {
  width: '100%',
  border: '0 none',
  color: '$slate900',
  background: 'transparent',
  outline: 'none',

  padding: '$1',
})