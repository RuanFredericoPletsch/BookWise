'use client'

import * as S from './styles'

type AvatarProps = {
  name: string
  src: string
  size?: 'md' | 'lg'
}

export const Avatar = ({ name, src, size = 'md' }: AvatarProps) => {
  const [firstName, secondName] = name.split('')
  const initials = `${firstName[0]}${secondName[0]}`

  return (
    <S.Background size={size}>
      <S.AvatarFallBack size={size}>{initials}</S.AvatarFallBack>
      <S.AvatarImage src={src} alt={name} size={size} />
    </S.Background>
  )
}
