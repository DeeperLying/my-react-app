// import { FC } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/index'

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
