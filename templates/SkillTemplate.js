import Image from 'next/image'
import Link from 'next/link'

import Layout from 'layouts/Layout'

import { getStrapiMedia } from '@/helpers/media'

import moment from 'moment'
import { FiArrowLeft } from 'react-icons/fi'

const SkillTemplate = ({ skill }) => {
  const seo = {
    metaTitle: skill.name,
    metaDescription: skill.description
  }

  return (
    <Layout seo={seo}>
      <Link href='/skills'>
        <a className='flex items-center mb-4 text-gray-500 hover:text-gray-300 text-sm'>
          <FiArrowLeft className='mr-2' /> Return to Skills
        </a>
      </Link>
      <h1 className='mb-4 text-white'>{skill.name}</h1>
      <p className='text-gray-500 text-xs'>Last updated: {moment(skill.updated_at).fromNow()}</p>
      <hr className='my-4' />      

      {console.log(skill)}

      <p className='italic text-gray-300'>{skill.description}</p>
    </Layout>
  )
}

export default SkillTemplate