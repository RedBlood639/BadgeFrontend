import React from 'react'
import { HeaderWrapper } from './header.style'
import Link from 'next/link'

type headerProps = {
  appTitle: string
}
const Header: React.FC<headerProps> = ({ appTitle }) => (
  <HeaderWrapper>
    <Link href="/">{appTitle}</Link>
  </HeaderWrapper>
)

export default Header
