import Image from 'next/image'
import * as S from './styles'
import { Flex } from '@/styled-system/jsx'
import { Rating } from '../Rating'

type PopularBookProps = {
  bookName: string
  bookSrc: string
  authorName: string
  rating: number
  size?: 'sm' | 'md'
}

export const PopularBook = ({
  bookName,
  bookSrc,
  authorName,
  rating,
  size,
}: PopularBookProps) => {
  return (
    <S.BookContainer role="button">
      <Image
        src={bookSrc}
        alt={bookName}
        width={108}
        height={152}
        className={S.imageStyles({ size })}
      />
      <Flex direction="column" gap="8">
        <Flex direction="column">
          <S.BookName>{bookName}</S.BookName>
          <S.BookAuthor>{authorName}</S.BookAuthor>
        </Flex>
        <Rating rate={rating} bookName={bookName} disabled />
      </Flex>
    </S.BookContainer>
  )
}
