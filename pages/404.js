import Link from 'next/link'

import { fetchApi } from '@/helpers/api'

import Layout from 'layouts/Layout'
import Image from '@/components/Image'

const Page = () => {
  return (
    <Layout>
      <h1 className='text-white'>404: Page not found</h1>

      <hr className='my-4' />

      <p className='text-gray-300'>Let's go back home, shall we?</p>

    </Layout>
  )
}

export default Page
