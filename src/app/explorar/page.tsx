'use client'

import { Sidebar } from '@/components/Sidebar'

import * as S from './styles'
import { Binoculars } from 'phosphor-react'
import { Flex } from '@/styled-system/jsx'
import { SearchBar } from '@/components/SearchBar'
import { Tags } from '@/components/Tags'
import { BooksGrid } from '@/components/BooksGrid'

export default function Home() {
  return (
    <>
      <Sidebar />
      <S.PageContent>
        <Flex direction="column" gap="10" w="full">
          <Flex w="full" align="center" justify="space-between">
            <S.Title>
              <Binoculars size={32} color="var(--colors-green-100)" /> Explorar
            </S.Title>
            <SearchBar />
          </Flex>
          <Tags></Tags>
        </Flex>
        <BooksGrid />
      </S.PageContent>
    </>
  )
}
