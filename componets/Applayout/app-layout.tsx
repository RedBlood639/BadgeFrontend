import React from 'react'
import Header from '../../Layouts/header/header'
import Footer from '../../Layouts/footer/footer'
import navButtons from '../../config/buttons'

import { LayoutContent, LayoutWrapper } from './app-layou.style'

const AppLayout = (props: any) => {
  const appTitle = `> WHATBYTE`
  return (
    <LayoutWrapper>
      <Header appTitle={appTitle} />
      <LayoutContent>{props.children}</LayoutContent>
      <Footer navButtons={navButtons} />
    </LayoutWrapper>
  )
}

export default AppLayout
