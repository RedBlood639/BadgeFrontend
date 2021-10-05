import type { AppProps } from 'next/app'
import AppLayout from '../componets/Applayout/app-layout'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from '../utils/site-material/site-material'
import GlobalStyle from '../utils/site-globalstyle/site-globalstyle'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}
export default MyApp
