'use client'

import { CaretRight } from 'phosphor-react'
import { Flex } from '@/styled-system/jsx'

import * as S from './styles'
import { PopularBook } from '../../cards/PopularBookCard'
import { ListHeader } from '../ListHeader'

export const PopularBooks = () => {
  return (
    <Flex direction="column" gap="4">
      <ListHeader
        name="Livros populares"
        actionHref="/explorar"
        actionLabel={
          <Flex align="center" gap="2">
            Ver Todos
            <CaretRight size={16} />
          </Flex>
        }
      />
      <S.Booklist>
        <PopularBook
          bookName="A revolução dos bixos"
          bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
          authorName="Goirge Oil"
          rating={4}
        />
        <PopularBook
          bookName="A revolução dos bixos"
          bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
          authorName="Goirge Oil"
          rating={3}
        />
        <PopularBook
          bookName="A revolução dos bixos"
          bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
          authorName="Goirge Oil"
          rating={2}
        />
        <PopularBook
          bookName="A revolução dos bixos"
          bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg"
          authorName="Goirge Oil"
          rating={5}
        />
      </S.Booklist>
    </Flex>
  )
}
