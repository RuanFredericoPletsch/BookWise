'use client'

import { Flex } from '@/styled-system/jsx'
import { Avatar } from '../../primitives/Avatar'
import * as S from './styles'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'

export const Profile = () => {
  return (
    <S.ProfileContainer>
      <S.TopSection>
        <Avatar
          name="Ruan Pletsch"
          src="https://avatars.githubusercontent.com/u/66543134?v=4"
          size="lg"
        ></Avatar>
        <Flex direction="column" alignItems="center">
          <S.UserName>Ruan P</S.UserName>
          <S.MemberSince>Membro desde 2020</S.MemberSince>
        </Flex>
      </S.TopSection>
      <S.Separator />
      <S.BottomSection>
        <S.ProfileEntry>
          <BookOpen size={32} color="var(--colors-green-100)" />
          <Flex direction="column">
            <S.ProfileEntryValue>3800</S.ProfileEntryValue>
            <S.ProfileEntryLabel>Páginas lidas</S.ProfileEntryLabel>
          </Flex>
        </S.ProfileEntry>
        <S.ProfileEntry>
          <Books size={32} color="var(--colors-green-100)" />
          <Flex direction="column">
            <S.ProfileEntryValue>10</S.ProfileEntryValue>
            <S.ProfileEntryLabel>Livros avaliados</S.ProfileEntryLabel>
          </Flex>
        </S.ProfileEntry>
        <S.ProfileEntry>
          <UserList size={32} color="var(--colors-green-100)" />
          <Flex direction="column">
            <S.ProfileEntryValue>8</S.ProfileEntryValue>
            <S.ProfileEntryLabel>Autores lidos</S.ProfileEntryLabel>
          </Flex>
        </S.ProfileEntry>
        <S.ProfileEntry>
          <BookmarkSimple size={32} color="var(--colors-green-100)" />
          <Flex direction="column">
            <S.ProfileEntryValue>Computação</S.ProfileEntryValue>
            <S.ProfileEntryLabel>Categoria mais lida</S.ProfileEntryLabel>
          </Flex>
        </S.ProfileEntry>
      </S.BottomSection>
    </S.ProfileContainer>
  )
}
