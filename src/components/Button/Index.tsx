import { HTMLProps, ReactNode } from 'react'
import * as S from './styles'

type ButtonProps = {
  children: ReactNode
} & HTMLProps<HTMLButtonElement> &
  S.buttonVariants

export const Button = ({ children, buttonSize }: ButtonProps) => {
  return (
    <S.ButtonContainer buttonSize={buttonSize}>{children}</S.ButtonContainer>
  )
}
