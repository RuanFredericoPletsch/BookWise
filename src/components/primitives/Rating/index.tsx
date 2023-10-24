'use client'

import { Star } from 'phosphor-react'
import * as S from './styles'
import { RatingGroup, RatingGroupProps } from '@ark-ui/react'
import { type } from 'os'
import { BookName } from '../../cards/BookRatingCard/styles'

type RatingProps = RatingGroupProps & {
  bookName: string
  rate: number
}

export const Rating = ({ bookName, rate, ...props }: RatingProps) => {
  return (
    <RatingGroup
      max={5}
      defaultValue={rate}
      aria-label={`${bookName} rating`}
      {...props}
    >
      <S.BookRating>
        {({ sizeArray }) =>
          sizeArray.map((index) => (
            <S.Star key={index} index={index}>
              {({ isHighlighted }) => {
                if (isHighlighted) return <Star size={24} weight="fill" />
                return <Star size={24} weight="regular" />
              }}
            </S.Star>
          ))
        }
      </S.BookRating>
    </RatingGroup>
  )
}
