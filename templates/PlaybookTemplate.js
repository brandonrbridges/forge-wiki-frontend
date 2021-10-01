import Image from 'next/image'
import Link from 'next/link'

import Layout from 'layouts/Layout'

import { getStrapiMedia } from '@/helpers/media'

import moment from 'moment'
import { FiArrowLeft } from 'react-icons/fi'

const PlaybookTemplate = ({ playbook }) => {
  const seo = {
    metaTitle: playbook.name,
    metaDescription: playbook.description
  }

  return (
    <Layout seo={seo}>
      <Link href='/playbooks'>
        <a className='flex items-center mb-4 text-gray-500 hover:text-gray-300 text-sm'>
          <FiArrowLeft className='mr-2' /> Return to Playbooks
        </a>
      </Link>
      <h1 className='mb-4 text-white'>{playbook.name}</h1>
      <p className='text-gray-500 text-xs'>Last updated: {moment(playbook.updated_at).fromNow()}</p>
      <hr className='my-4' />      

      {console.log(playbook)}

      <div className='gap-4 grid grid-cols-4'>
        <div className='bg-gray-700 p-4 w-full'>
          <p className='mb-2 text-sm text-white'>Skill 1</p>
          <p className='font-bold text-white'>{playbook.skill1.name}</p>
          <p className='text-gray-300'>{playbook.skill1.description}</p>
        </div>
        <div className='bg-gray-700 p-4 w-full'>
          <p className='mb-2 text-sm text-white'>Skill 2</p>
          <p className='font-bold text-white'>{playbook.skill2.name}</p>
          <p className='text-gray-300'>{playbook.skill2.description}</p>
        </div>
        <div className='bg-gray-700 p-4 w-full'>
          <p className='mb-2 text-sm text-white'>Skill 3</p>
          <p className='font-bold text-white'>{playbook.skill3.name}</p>
          <p className='text-gray-300'>{playbook.skill3.description}</p>
        </div>
        <div className='bg-gray-700 p-4 w-full'>
          <p className='mb-2 text-sm text-white'>Skill 4</p>
          <p className='font-bold text-white'>{playbook.skill4.name}</p>
          <p className='text-gray-300'>{playbook.skill4.description}</p>
        </div>
      </div>

    </Layout>
  )
}

export default PlaybookTemplate