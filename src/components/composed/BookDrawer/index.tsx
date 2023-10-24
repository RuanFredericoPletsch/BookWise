import { Dialog, Portal } from '@ark-ui/react'
import * as S from './styles'
import { BookDrawerCard, BookDrawerCardProps } from '../../cards/BookDrawerCard'
import { BookDrawerRatingCard } from '../../cards/BookDrawerRatingCard'
import { Flex } from '@/styled-system/jsx'
import { ListHeader } from '../../lists/ListHeader'
import { LoginModal } from '../LoginModal'

type BookDrawerProps = {
  book: BookDrawerCardProps
}

export const BookDrawer = ({ book }: BookDrawerProps) => {
  return (
    <Portal>
      <S.Overlay />
      <S.DrawerContainer>
        <S.DrawerContent>
          <Dialog.Root>
            <BookDrawerCard {...book} />
            <Flex direction="column" gap="4">
              <ListHeader name="Avaliações" actionLabel="Avaliar" asChild>
                <Dialog.Trigger>Avaliar</Dialog.Trigger>
              </ListHeader>
              <BookDrawerRatingCard
                userAvatar="https://avatars.githubusercontent.com/u/66543134?v=4"
                userName="Ruan"
                publishedOn="Hoje"
                bookName="Aquele lá"
                rate={4}
                reviewText="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
              />
              <BookDrawerRatingCard
                userAvatar="https://avatars.githubusercontent.com/u/66543134?v=4"
                userName="Ruan"
                publishedOn="Hoje"
                bookName="Aquele lá"
                rate={4}
                reviewText="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
              />
              <BookDrawerRatingCard
                userAvatar="https://avatars.githubusercontent.com/u/66543134?v=4"
                userName="Ruan"
                publishedOn="Hoje"
                bookName="Aquele lá"
                rate={4}
                reviewText="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
              />
              <BookDrawerRatingCard
                userAvatar="https://avatars.githubusercontent.com/u/66543134?v=4"
                userName="Ruan"
                publishedOn="Hoje"
                bookName="Aquele lá"
                rate={4}
                reviewText="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget"
              />
            </Flex>
            <LoginModal />
          </Dialog.Root>
        </S.DrawerContent>
      </S.DrawerContainer>
    </Portal>
  )
}
