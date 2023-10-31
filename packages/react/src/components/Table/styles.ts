import { styled } from "../../styles";

export const TableRoot = styled('table', {
  width: '100%',
  font: '$default',
  textAlign: 'center',

  'th': {
    padding: '$2',
    borderBottom: '1px solid $indigo50',
    height: '$12'
  },

  'td': {
    padding: '$2',
    borderBottom: '1px solid $indigo50',
    height: '$12'
  },

  'tbody': {
    'tr:nth-child(odd)': {
      backgroundColor: '$indigo50'
    },

    'tr': {
      '&:hover': {
        backgroundColor: '$indigo100'
      }
    }
  },

})