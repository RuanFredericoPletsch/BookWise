import { Flex } from '@/styled-system/jsx'
import { Avatar } from '../../primitives/Avatar'
import * as S from './styles'

type UserProps = {
  userName: string
  userAvatar: string
  publishedOn: string
}

export const User = ({ userName, userAvatar, publishedOn }: UserProps) => {
  return (
    <S.RatingAutor>
      <Avatar name={userName} src={userAvatar} />
      <Flex direction="column">
        <S.UserName>{userName}</S.UserName>
        <S.PublishedOn>{publishedOn}</S.PublishedOn>
      </Flex>
    </S.RatingAutor>
  )
}
