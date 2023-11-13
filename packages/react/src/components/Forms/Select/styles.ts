import { styled } from '../../../styles'

export const Container = styled('div', {
  border: '1px solid $gray300',
  minHeight: '$10',
  padding: '$2 $3',
  borderRadius: '$sm',
  gap: '$2',
  display: 'flex',
  cursor: 'pointer',

})

export const SelectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

export const Selection = styled('div', {
  border: '0 none',
  backgroundColor: 'transparent',
  appearance: 'none',
  outline: '0!important',
  width: '100%',
})

export const AppearanceContainer = styled('div', {
  fontSize: '$md',
  color: "$gray300",
  borderLeft: '1px solid $gray300',
  paddingLeft: '$2',
  height: '100%',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray500',
    transition: 'color 0.2s ease-in-out',
  }
})

export const OptionCase = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  marginTop: '$2',
  border: '1px solid $gray300',
  minHeight: '$10',
  padding: '$2 $3',
  borderRadius: '$sm',
  maxHeight: '$64',
  overflow: 'auto',
})

export const Option = styled('div', {
  cursor: 'pointer',
  height: '100%',
  padding: '$2 $3',
  borderRadius: '$sm',

  '&:hover': {
    backgroundColor: '$indigo50'
  },

  variants: {
    variant: {
      unselected: {},
      selected: {
        backgroundColor: '$indigo50'
      }
    }
  }

})


export const Input = styled('input', {
  border: '0!important',
  backgroundColor: 'transparent',
  appearance: 'none',
  outline: '0!important',
})