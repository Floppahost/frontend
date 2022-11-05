import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'

// everything installed, sth missing?

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"]
})
export default function App({ Component, pageProps }: AppProps) {

  return (
  <main className={montserrat.className}>
    <Component {...pageProps} />
    </main>)
}
