import { User } from '@/components/composed/User'
import * as S from './styles'
import { Rating } from '@/components/primitives/Rating'
import { Dialog } from '@ark-ui/react'
import { LoginModal } from '@/components/composed/LoginModal'

type BookDrawerRatingCard = {
  publishedOn: string
  userAvatar: string
  userName: string
  rate: number
  bookName: string
  reviewText: string
}

export const BookDrawerRatingCard = ({
  publishedOn,
  userAvatar,
  userName,
  bookName,
  rate,
  reviewText,
}: BookDrawerRatingCard) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <S.CardContainer>
          <S.CardHeader>
            <User
              publishedOn={publishedOn}
              userAvatar={userAvatar}
              userName={userName}
            />
            <Rating rate={rate} bookName={bookName} disabled />
          </S.CardHeader>
          <S.ReviewText>{reviewText}</S.ReviewText>
        </S.CardContainer>
      </Dialog.Trigger>
      <LoginModal />
    </Dialog.Root>
  )
}
