import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Modal } from '@redq/reuse-modal'
import { LayoutContext } from '../context/layout/layout.context'
import { PopupContext } from '../context/popup/popoup.context'
import Header from './header/desktop/header'
import Footer from './footer/desktop/footer'
import { isEmpty } from '../utils/validation/validation'

type LayoutProps = {
  deviceType: {
    mobile: boolean
    tablet: boolean
    desktop: boolean
  }
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter()
  const {
    layoutDispatch,
    layoutState: { pageLayout, pageOpt, footerOpt },
  } = React.useContext<any>(LayoutContext)
  const {
    popupDispatch,
    popupState: { popup },
  } = React.useContext<any>(PopupContext)

  const handleSide = (opened: string) => {
    popupDispatch({ type: opened })
  }
}

export default Layout
