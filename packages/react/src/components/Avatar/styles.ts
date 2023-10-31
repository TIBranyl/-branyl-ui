import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  display: 'flex',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
  borderRadius: "$md",
  border: '2px solid $indigo200',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$indigo200',
  outline: 'none',
  cursor: 'pointer',

  '&:hover': {
    borderColor: '$indigo500',
    backgroundColor: '$indigo500'
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '98%',
  height: '98%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$white',

  svg: {
    width: '$8',
    height: '$8',
  },
})
