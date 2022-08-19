// import { FC } from 'react'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/index'

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  console.log('0000')
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
