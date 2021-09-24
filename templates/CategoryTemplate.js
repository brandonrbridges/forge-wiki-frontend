import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from 'layouts/Layout'

import Breadcrumbs from '@/components/Breadcrumbs'
import { getStrapiMedia } from '@/helpers/media'
import Search from '@/components/Search'

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const CategoryTemplate = ({ title, array }) => {
  const router = useRouter()

  const seo = {
    metaTitle: title,
  }

  return (
    <Layout seo={seo}>
      <Breadcrumbs />

      <h1 className='mb-4 text-white'>{title}</h1>

      <Search items={array} />

      <hr className='mt-4 mb-8' />

      <div className='gap-10 grid grid-cols-4'>
        {alphabet.map(letter => (
          <div id={letter}>
            <p className='font-bold text-white'>{letter.toUpperCase()}</p>
            <hr className='my-2' />
            <div className='gap-y-2 grid grid-cols-1'>
              {array.map(item => {
                if(item.name.toLowerCase().startsWith(letter)) {
                  return (
                    <p>
                      <Link href={`${router.route}/${item.slug}`}>
                        <a className='flex items-center text-gray-400 hover:text-gray-200'>
                          {item.portrait && <Portrait url={item.portrait} />}
                          {item.sprite && !item.portrait && <Sprite url={item.sprite} />}
                          {item.name}
                        </a>
                      </Link>
                    </p>
                  )
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

const Portrait = ({ url }) => (
  <div className='h-8 mr-2 relative w-8'>
    <Image src={getStrapiMedia(url)} layout='fill' objectFit='cover' />
  </div>
)

const Sprite = ({ url }) => (
  <div className='bg-gray-900 mr-2 p-1'>
    <div className='h-6 relative w-6'>
      <Image src={getStrapiMedia(url)} layout='fill' objectFit='cover' />
    </div>
  </div>
)
  
export default CategoryTemplate