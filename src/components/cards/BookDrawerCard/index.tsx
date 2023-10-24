import { Flex } from '@/styled-system/jsx'
import * as S from './styles'
import Image from 'next/image'
import { css } from '@/styled-system/css'
import { Rating } from '../../primitives/Rating'
import { BookOpen, BookmarkSimple } from 'phosphor-react'

export type BookDrawerCardProps = {
  bookName: string
  bookSrc: string
  bookAuthor: string
  rating: number
  AmountOfRatings: number
}

export const BookDrawerCard = ({
  bookName,
  bookSrc,
  bookAuthor,
  rating,
  AmountOfRatings,
}: BookDrawerCardProps) => {
  return (
    <S.CardContaider>
      <Flex gap="8">
        <Image
          src={bookSrc}
          width={171}
          height={242}
          alt="Imagem do livro"
          className={css({ w: '171px', h: '242px', rounded: '10px' })}
        />
        <S.BookInfo>
          <Flex direction="column">
            <S.BookTitle>{bookName}</S.BookTitle>
            <S.BookAuthor>{bookAuthor}</S.BookAuthor>
          </Flex>
          <Flex direction="column" gap="1" mr="auto">
            <Rating rate={rating} bookName={bookName} disabled />
            <S.AmountOfRatings>{AmountOfRatings} Avaliações</S.AmountOfRatings>
          </Flex>
        </S.BookInfo>
      </Flex>
      <S.BookBottomInfo>
        <S.BottomInfoItem>
          <BookmarkSimple size={24} />
          <Flex direction="column">
            <S.BottomInfoLabel>Categoria</S.BottomInfoLabel>
            <S.BottomInfoValue>Computação, Educação</S.BottomInfoValue>
          </Flex>
        </S.BottomInfoItem>
        <S.BottomInfoItem>
          <BookOpen size={24} />
          <Flex direction="column">
            <S.BottomInfoLabel>Páginas</S.BottomInfoLabel>
            <S.BottomInfoValue>160</S.BottomInfoValue>
          </Flex>
        </S.BottomInfoItem>
      </S.BookBottomInfo>
    </S.CardContaider>
  )
}
