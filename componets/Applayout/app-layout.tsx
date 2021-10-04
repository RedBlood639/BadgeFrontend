import React from 'react'
import Header from '../../Layouts/header/header'
import Footer from '../../Layouts/footer/footer'
import { LayoutContent, LayoutWrapper } from './app-layou.style'

const AppLayout = (props: any) => {
  const appTitle = `> WHATBYTE`
  return (
    <LayoutWrapper>
      <Header appTitle={appTitle} />
      <LayoutContent>{props.children}</LayoutContent>
      <Footer />

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </LayoutWrapper>
  )
}

export default AppLayout
