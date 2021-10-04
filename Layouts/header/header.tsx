import React from 'react'
import { HeaderWrapper } from './header.style'
type headerProps = {
  appTitle: string
}
const Header: React.FC<headerProps> = ({ appTitle }) => (
  <HeaderWrapper>{appTitle}</HeaderWrapper>
)

export default Header
