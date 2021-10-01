import Image from 'next/image'
import Link from 'next/link'

import Layout from 'layouts/Layout'

import { getStrapiMedia } from '@/helpers/media'

import moment from 'moment'
import { FiArrowLeft } from 'react-icons/fi'

const MonsterTemplate = ({ monster }) => {
  console.log(monster)
  
  const seo = {
    metaTitle: monster.name,
    metaDescription: monster.description
  }

  return (
    <Layout seo={seo}>
      <Link href='/monsters'>
        <a className='flex items-center mb-4 text-gray-500 hover:text-gray-300 text-sm'>
          <FiArrowLeft className='mr-2' /> Return to Monsters
        </a>
      </Link>
      <h1 className='mb-4 text-white'>{monster.name}</h1>
      <p className='text-gray-500 text-xs'>Last updated: {moment(monster.updated_at).fromNow()}</p>
      <hr className='my-4' />

      <div className='gap-4 grid grid-cols-4'>
        <div className='bg-gray-900 p-4 rounded'>
          <div className='bg-gray-800 h-24 mb-4 py-4 relative rounded w-full'>
            <Image src={getStrapiMedia(monster.animatedSprite)} layout='fill' objectFit='contain' />
          </div>
          <h2 className='text-white'>{monster.name}</h2>
          <p className='text-gray-300'></p>
        </div>
        <div className='bg-gray-900 col-span-3 p-4 rounded'>
          <h3 className='mb-2 text-white'>Skills</h3>
          <p className='text-gray-500 text-sm'>Each turn plays a new skill, starting with skill 1 until all 4 skills have been used.</p>
          <hr className='my-4' />
          <div className='gap-4 grid grid-cols-4'>
            <div>
              <p className='font-bold text-white'>{monster.skill1.name}</p>
              <p className='text-gray-300'>{monster.skill1.description}</p>
            </div>
            <div>
              <p className='font-bold text-white'>{monster.skill2.name}</p>
              <p className='text-gray-300'>{monster.skill2.description}</p>
            </div>
            <div>
              <p className='font-bold text-white'>{monster.skill3.name}</p>
              <p className='text-gray-300'>{monster.skill3.description}</p>
            </div>
            <div>
              <p className='font-bold text-white'>{monster.skill4.name}</p>
              <p className='text-gray-300'>{monster.skill4.description}</p>
            </div>
          </div>
        </div>
      </div>    
    </Layout>
  )
}

export default MonsterTemplate