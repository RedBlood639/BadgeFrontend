import React, { useEffect, useState } from 'react'
import { Router } from 'next/router'
import { useMedia } from '../utils/site-media/site-usemedia'
import { defaultTheme } from '../utils/site-theme/default'
// import PageLoader from 'next/dist/client/page-loader'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
