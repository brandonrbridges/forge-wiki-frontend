import Image from 'next/image'
import Link from 'next/link'

import Layout from 'layouts/Layout'

import { getStrapiMedia } from '@/helpers/media'

import moment from 'moment'
import { FaGem } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'

import SwordIcon from '@/assets/images/svg/broadsword.svg'

const RecipeTemplate = ({ recipe }) => {
  const seo = {
    metaTitle: recipe.name
  }

  return (
    <Layout seo={seo}>
      <Link href='/recipes'>
        <a className='flex items-center mb-4 text-gray-500 hover:text-gray-300 text-sm'>
          <FiArrowLeft className='mr-2' /> Return to Recipes
        </a>
      </Link>
      <div className='flex items-center mb-4'>
        {recipe.sprite && (
          <div className='bg-gray-900 mr-2 p-1 rounded'>
            <div className='block h-8 relative w-8'>
              <Image src={getStrapiMedia(recipe.sprite)} className='rounded' layout='fill' objectFit='contain' />
            </div>
          </div>
        )}
        <h1 className='text-white'>{recipe.name}</h1>
      </div>
      <p className='text-gray-500 text-xs'>Last updated: {moment(recipe.updated_at).fromNow()}</p>
      <hr className='my-4' />
  
      <div className='flex'>
        {recipe.guildWorkers.map(worker => {
          if(worker.type == 'Weapon') {
            return (
              <div className='bg-gray-900 p-2 rounded-full'>
                <div className='h-8 relative w-8'>
                  <Image src={SwordIcon.src} layout='fill' objectFit='cover' />
                </div>
              </div>
            )
          }
  
          if(worker.type == 'Jewel') {
            return (
              <div className='bg-gray-900 p-2 rounded-full'>
                <div className='h-8 relative w-8'>
                  <FaGem className='h-8 text-white w-8' />
                </div>
              </div>
            )
          }
          
          return <p>{worker.type}</p>
        })}
      </div>
  
      <p className='text-gray-300'>Level: {recipe.level}</p>
      <p className='text-gray-300'>Type: {recipe.type.name}</p>
      <p className='text-gray-300'>Craft Time: {recipe.craftTime}</p>
      <p className='italic text-gray-300'>{recipe.description}</p>
    </Layout>
  )
}

export default RecipeTemplate