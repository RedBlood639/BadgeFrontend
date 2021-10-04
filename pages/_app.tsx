import type { AppProps } from 'next/app'
import AppLayout from '../componets/Applayout/app-layout'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from '../utils/site-globalstyle/siteGlobalstyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}
export default MyApp
