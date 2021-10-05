import React from 'react'
import NavButton from '../../componets/NavButton/NavButton'
import { FooterWrapper, FooterItem } from './footer.style'

type ButtonProps = {
  label: string
  path: string
  icon: React.Component
}

type FooterProps = {
  navButtons: ButtonProps[]
}
const Footer: React.FC<FooterProps> = ({ navButtons }) => {
  return (
    <FooterWrapper>
      {navButtons.map((button) => (
        <NavButton
          key={button.path}
          path={button.path}
          label={button.label}
          icon={button.icon}
        />
      ))}
    </FooterWrapper>
  )
}

export default Footer
