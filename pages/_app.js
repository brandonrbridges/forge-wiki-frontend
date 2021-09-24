import App from 'next/app'
import Head from 'next/head'

import '@/assets/style.scss'

import { createContext } from 'react'
import { fetchApi } from '@/helpers/api'
import { getStrapiMedia } from '@/helpers/media'

export const GlobalContext = createContext({})

const Wiki = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

Wiki.getInitialProps = async (context) => {
  const props = await App.getInitialProps(context)
  const global = await fetchApi('/global')

  return {...props, pageProps: { global } }
}

export default Wiki