import type { AppProps } from 'next/app'
import { GlobalStyle, AppContainer }  from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <AppContainer>
    <GlobalStyle />
    <Component {...pageProps} />
  </AppContainer>)
}
