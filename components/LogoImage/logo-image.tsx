import React from 'react'
import Router from 'next/router'
import { LogoBox, Logo } from './logo-image.style'

type LogoProps = {
  imageUrl: string
  alt: string
  onClick?: () => void
  align?: string
  herf?: string
}

const LogoImage: React.FC<LogoProps> = ({
  herf = '/',
  imageUrl,
  alt,
  onClick,
  align = 'center',
}) => {
  const onLogoClick = (href: string) => {
    Router.push(href)
    if (onClick) {
      onClick()
    }
  }
  return (
    <LogoBox onClick={() => onLogoClick(herf)} align={align}>
      <Logo src={imageUrl} alt={alt} />
    </LogoBox>
  )
}

export default LogoImage
