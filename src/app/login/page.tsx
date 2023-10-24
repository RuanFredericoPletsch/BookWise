'use client'

import { Flex } from '@/styled-system/jsx'
import * as S from './styles'
import { RocketLaunch } from 'phosphor-react'
import { FaGoogle, FaGithub } from 'react-icons/fa'

export default function Login() {
  return (
    <S.PageConteiner>
      <S.Aside style={{ backgroundImage: 'url(/Image.svg)' }}></S.Aside>
      <S.LoginContainer>
        <Flex direction="column">
          <S.LoginTitle>Boas vindas!</S.LoginTitle>
          <S.LoginText>Faça login ou acesse como visitante</S.LoginText>
        </Flex>
        <Flex direction="column" gap="4">
          <S.LoginButton>
            <FaGoogle size={32} />
            <p>Entrar com Google</p>
          </S.LoginButton>
          <S.LoginButton>
            <FaGithub size={32} />
            <p>Entrar com GitHub</p>
          </S.LoginButton>
          <S.LoginButton>
            <RocketLaunch size={32} />
            <p>Acesse como visitante</p>
          </S.LoginButton>
        </Flex>
      </S.LoginContainer>
    </S.PageConteiner>
  )
}
