import Image from 'next/image'
import Link from 'next/link'

import Layout from 'layouts/Layout'

import { getStrapiMedia } from '@/helpers/media'

import moment from 'moment'
import { FiArrowLeft } from 'react-icons/fi'
import { RiHeartFill, RiSwordFill } from 'react-icons/ri'

const HeroTemplate = ({ hero }) => {
  const seo = {
    metaTitle: hero.name,
    metaDescription: hero.description
  }

  return (
    <Layout seo={seo}>
      <Link href='/heroes'>
        <a className='flex items-center mb-4 text-gray-500 hover:text-gray-300 text-sm'>
          <FiArrowLeft className='mr-2' /> Return to Heroes
        </a>
      </Link>
      <h1 className='mb-4 text-white'>{hero.name}</h1>
      <p className='text-gray-500 text-xs'>Last updated: {moment(hero.updated_at).fromNow()}</p>
      <hr className='my-4' />
      <div className='flex items-center'>
        <Sprite url={hero.sprite} />
        <div>
          <h2 className='mb-4 text-white'>{hero.name}</h2>
          <div className='my-4'>
            <p className='text-gray-300'>Race: {hero.race}</p>
            <p className='text-gray-300'>Class: {hero.class}</p>
          </div>
          <div>
            <StatBadge health={hero.health} />
            <StatBadge power={hero.power} />
            <p className='italic mt-4 text-gray-300'>{hero.description}</p>
          </div>
        </div>
        {hero.animatedSprite && <AnimatedSprite url={hero.animatedSprite} />}
      </div>

      <div className='mt-4'>
        <p className='text-white'>Starting Playbook: {hero.startingPlaybook.name}</p>
        <p>Available Playbooks:</p>
        {hero.playbooks.map(playbook => (
          <Link href={`/playbooks/${playbook.slug}`}>
            <a className='text-gray-300 hover:text-gray-50'>
              {playbook.name}
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

const AnimatedSprite = ({ url }) => (
  <div className='bg-gray-900 mr-4 ml-24 p-2 rounded'>
    <div className='block h-24 relative w-24'>
      <Image src={getStrapiMedia(url)} className='rounded' layout='fill' objectFit='contain' />
    </div>
  </div>
)

const Sprite = ({ url }) => (
  <div className='bg-gray-900 mr-4 p-2 rounded'>
    <div className='block h-48 relative w-48'>
      <Image src={getStrapiMedia(url)} className='rounded' layout='fill' objectFit='contain' />
    </div>
  </div>
)

const StatBadge = ({ health, power }) => (
  <div className='bg-gray-900 inline-flex items-center mr-2 px-2 py-1 rounded'>
    <div className=''>
      {health && <RiHeartFill className='mr-2 text-xl text-white' style={{ color: '#F86B6B' }} />}
      {power && <RiSwordFill className='mr-2 text-xl text-white' style={{ color: '#EEFF08' }} />}
    </div>
    <div className='bg-gray-700 px-4 rounded'>
      <p className='text-white'>{health ? health : power}</p>
    </div>
  </div>
)

export default HeroTemplate