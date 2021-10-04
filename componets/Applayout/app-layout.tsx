import React from 'react'
import Header from '../../Layouts/header/header'
import Footer from '../../Layouts/footer/footer'
import { LayoutContent, LayoutWrapper } from './app-layou.style'
const AppLayout = (props: any) => (
  <LayoutWrapper>
    <Header />
    <LayoutContent>{props.children}</LayoutContent>
    <Footer />
  </LayoutWrapper>
)

export default AppLayout
