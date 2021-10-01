import Image from 'next/image'
import Link from 'next/link'

import Layout from 'layouts/Layout'

import { getStrapiMedia } from '@/helpers/media'

import moment from 'moment'
import { FiArrowLeft } from 'react-icons/fi'

const MaterialTemplate = ({ material }) => {
  const seo = {
    metaTitle: material.name,
    metaDescription: material.description
  }

  return (
    <Layout seo={seo}>
      <Link href='/materials'>
        <a className='flex items-center mb-4 text-gray-500 hover:text-gray-300 text-sm'>
          <FiArrowLeft className='mr-2' /> Return to Materials
        </a>
      </Link>
      <h1 className='mb-4 text-white'>{material.name}</h1>
      <p className='text-gray-500 text-xs'>Last updated: {moment(material.updated_at).fromNow()}</p>
      <hr className='my-4' />      
    </Layout>
  )
}

export default MaterialTemplate