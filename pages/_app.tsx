import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React, { useEffect, useState } from 'react'
import { Router } from 'next/router'
import { useMedia } from '../utils/site-media/site-usemedia'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
