'use client'

import { ChartLineUp, Binoculars, SignIn, User } from 'phosphor-react'
import * as S from './styles'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export const Sidebar = () => {
  const pathname = usePathname()
  return (
    <S.SidebarContainer style={{ backgroundImage: 'url(/sidebar-bg.png)' }}>
      <Image src="/Logo.svg" alt="Bookwise" width={128} height={32} />
      <nav>
        <S.NavList>
          <li>
            <S.NavItem href="/" isSelected={pathname === '/'}>
              <ChartLineUp size={24} />
              Inicio
            </S.NavItem>
          </li>
          <li>
            <S.NavItem href="/explorar" isSelected={pathname === '/explorar'}>
              <Binoculars size={24} />
              Explorar
            </S.NavItem>
          </li>
          <li>
            <S.NavItem href="/perfil" isSelected={pathname === '/perfil'}>
              <User size={24} />
              Perfil
            </S.NavItem>
          </li>
        </S.NavList>
      </nav>
      <S.LoginButton href="/login">
        Fazer Login
        <SignIn size={24} color="var(--colors-green-100)" />
      </S.LoginButton>
    </S.SidebarContainer>
  )
}
