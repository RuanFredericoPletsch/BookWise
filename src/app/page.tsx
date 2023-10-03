'use client'

import { Sidebar } from '@/components/Sidebar'

import * as S from './styles'
import { Flex } from '../../styled-system/jsx'
import { ChartLineUp } from 'phosphor-react'
import { PopularBooks } from '@/components/PopularBooks'
import { RecentRatigs } from '@/components/RecentRatings'

export default function Home() {
  return (
    <>
      <Sidebar />
      <S.PageContent>
        <Flex direction="column" gap="10">
          <S.Title>
            <ChartLineUp size={32} color="var(--colors-green-100)" /> Início
          </S.Title>
          <Flex gap="16">
            <RecentRatigs />
            <PopularBooks />
          </Flex>
        </Flex>
      </S.PageContent>
    </>
  )
}
