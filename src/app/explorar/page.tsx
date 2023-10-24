'use client'

import { Sidebar } from '@/components/composed/Sidebar'

import * as S from './styles'
import { Binoculars } from 'phosphor-react'
import { Flex } from '@/styled-system/jsx'
import { SearchBar } from '@/components/composed/SearchBar'
import { Tags } from '@/components/primitives/Tags'
import { BooksGrid } from '@/components/lists/BooksGrid'

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
            <SearchBar placeholder="Buscar livro ou autor" />
          </Flex>
          <Tags></Tags>
        </Flex>
        <BooksGrid />
      </S.PageContent>
    </>
  )
}
