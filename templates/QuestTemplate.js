import Image from 'next/image'
import Link from 'next/link'

import Layout from 'layouts/Layout'

import { getStrapiMedia } from '@/helpers/media'

import moment from 'moment'
import { FiArrowLeft } from 'react-icons/fi'

const QuestTemplate = ({ quest }) => {
  const seo = {
    metaTitle: quest.name,
    metaDescription: quest.description
  }

  return (
    <Layout seo={seo}>
      <Link href='/quests'>
        <a className='flex items-center mb-4 text-gray-500 hover:text-gray-300 text-sm'>
          <FiArrowLeft className='mr-2' /> Return to Quests
        </a>
      </Link>
      <h1 className='mb-4 text-white'>{quest.name}</h1>
      <p className='text-gray-500 text-xs'>Last updated: {moment(quest.updated_at).fromNow()}</p>
      <hr className='my-4' />      

      <div className='gap-4 grid grid-cols-3'>
        <div className='col-span-2'>
          <p className='italic mb-4 text-gray-300'>{quest.description}</p>
        </div>

        <div className='bg-gray-700 p-4'>
          <h3 className='text-white'>Heroes</h3>
          <hr className='my-4' />
          <div className={`grid grid-cols-${quest.heroes.length}`}>
            {quest.heroes.map(hero => {
              return (
                <Link href={`/heroes/${hero.slug}`}>
                  <a className='group text-center'>
                    <div className='h-16 mb-2 mx-auto relative w-16'>
                      <Image src={getStrapiMedia(hero.sprite)} layout='fill' objectFit='cover' />
                    </div>
                    <p className='text-gray-300 group-hover:text-white'>{hero.name}</p>
                  </a>
                </Link>
              )
            })}
        </div>
      </div>


      
      </div>
    </Layout>
  )
}

export default QuestTemplate