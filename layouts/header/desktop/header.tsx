import React from 'react'
import { LogoBox } from '../../../components/LogoImage/logo-image.style'
import { LayoutContext } from '../../../context/layout/layout.context'
import { HeaderWrapper } from './header.style'
import Cotainer from '../../../components/Container/container'

type HeaderProps = {
  handleSide: (opened: string) => void
}

const Header: React.FC<HeaderProps> = ({ handleSide }) => {
  const {
    layoutState: { pageLayout },
  } = React.useContext<any>(LayoutContext)

  return (
    <HeaderWrapper>
      <Cotainer>2186</Cotainer>
    </HeaderWrapper>
  )
}

export default Header
