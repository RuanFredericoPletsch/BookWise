import { Flex } from '@/styled-system/jsx'
import { BookRatingCard } from '../../cards/BookRatingCard'
import * as S from './styles'

export const RecentRatigs = () => {
  return (
    <Flex direction="column" gap="3">
      <S.RecentRatings>Avaliações mais recentes</S.RecentRatings>
      <BookRatingCard
        userAvatar="https://avatars.githubusercontent.com/u/66543134?v=4"
        userName="Ruan"
        publishedOn="Hoje"
        bookName="O Hobbit"
        bookSrc="https://harpercollins.com.br/cdn/shop/products/9788595085800_54e043c2-1006-48e6-bf16-7db869ccc415.jpg?v=1692287307"
        bookAuthor="J.R.R. Tolkien"
        bookReview="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh"
        rating={4}
      />
      <BookRatingCard
        userAvatar="https://avatars.githubusercontent.com/u/66543134?v=4"
        userName="Ruan"
        publishedOn="Hoje"
        bookName="Gojo morreu"
        bookSrc="https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF1000,1000_QL80_.jpg"
        bookAuthor="J.R.R. Tolkien"
        bookReview="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh"
        rating={3}
      />
      <BookRatingCard
        userAvatar="https://avatars.githubusercontent.com/u/66543134?v=4"
        userName="Ruan"
        publishedOn="Hoje"
        bookName="Gojo morreu"
        bookSrc="https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF1000,1000_QL80_.jpg"
        bookAuthor="J.R.R. Tolkien"
        bookReview="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh"
        rating={4}
      />
      <BookRatingCard
        userAvatar="https://avatars.githubusercontent.com/u/66543134?v=4"
        userName="Ruan"
        publishedOn="Hoje"
        bookName="Gojo morreu"
        bookSrc="https://m.media-amazon.com/images/I/71PBZJaSmAL._AC_UF1000,1000_QL80_.jpg"
        bookAuthor="J.R.R. Tolkien"
        bookReview="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh"
        rating={5}
      />
    </Flex>
  )
}
