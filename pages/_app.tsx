import type { AppProps } from 'next/app'
import AppLayout from '../componets/Applayout/app-layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
export default MyApp
