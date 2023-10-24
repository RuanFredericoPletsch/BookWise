'use client'

import { Sidebar } from '@/components/composed/Sidebar'
import * as S from './styles'
import { MyReviewBookCard } from '@/components/cards/MyReviewBookCard'
import { Profile } from '@/components/composed/Profile'
import { Flex } from '@/styled-system/jsx'
import { User } from 'phosphor-react'
import { SearchBar } from '@/components/composed/SearchBar'

export default function Perfil() {
  return (
    <>
      <Sidebar />
      <S.PageContainer>
        <S.Title>
          <User size={32} color="var(--colors-green-100)" /> Perfil
        </S.Title>
        <Flex gap="16">
          <Flex direction="column" gap="6">
            <SearchBar
              labelProps={{ w: 'full' }}
              placeholder="Buscar livro avaliado"
            />
            <MyReviewBookCard
              bookName="A revolução dos bixos"
              bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
              bookAuthor="Goirge Oil"
              bookReview="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
              rating={4}
              publishedOn="Hoje"
            />
            <MyReviewBookCard
              bookName="A revolução dos bixos 2"
              bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
              bookAuthor="Goirge Oil"
              bookReview="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
              rating={4}
              publishedOn="Hoje"
            />
            <MyReviewBookCard
              bookName="A revolução dos bixos 3"
              bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
              bookAuthor="Goirge Oil"
              bookReview="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
              rating={4}
              publishedOn="Hoje"
            />
          </Flex>
          <Profile />
        </Flex>
      </S.PageContainer>
    </>
  )
}
