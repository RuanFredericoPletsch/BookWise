import Image from 'next/image'
import * as S from './styles'
import { Flex } from '@/styled-system/jsx'
import { css } from '@/styled-system/css'
import { Rating } from '../../primitives/Rating'
import { ReadMore } from '../../primitives/ReadMore'
import { User } from '@/components/composed/User'

type BookRatingProps = {
  userName: string
  userAvatar: string
  publishedOn: string
  bookSrc: string
  bookName: string
  bookAuthor: string
  bookReview: string
  rating: number
}

export const BookRatingCard = ({
  userName,
  userAvatar,
  publishedOn,
  bookName,
  bookSrc,
  bookAuthor,
  bookReview,
  rating,
}: BookRatingProps) => {
  return (
    <S.CardContaider>
      <S.CardHeader>
        <User
          userAvatar={userAvatar}
          userName={userName}
          publishedOn={publishedOn}
        />
        <Rating disabled bookName={bookName} rate={rating} />
      </S.CardHeader>
      <S.CardBody>
        <Image
          className={css({ h: '152px', rounded: 'sm' })}
          src={bookSrc}
          alt={bookName}
          height={152}
          width={100}
        />
        <Flex direction="column" gap="5">
          <Flex direction="column">
            <S.BookName>{bookName}</S.BookName>
            <S.BookAuthor>{bookAuthor}</S.BookAuthor>
          </Flex>
          <ReadMore id="book-review" amountOfWords={30} text={bookReview} />
        </Flex>
      </S.CardBody>
    </S.CardContaider>
  )
}
