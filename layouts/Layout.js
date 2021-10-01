import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'

import Dungeon from '@/assets/images/dungeon.jpg'
import Logo from '@/assets/images/site-logo.png'
import Search from '@/components/Search'

const Layout = ({ children, seo }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700;900&display=swap" rel="stylesheet" />

      <title>{seo ? seo.metaTitle + ' |' : ''} Forge &amp; Fortune Wiki</title>
    </Head>

    <div className='bg-red-500 w-full' style={{ background: `url(${Dungeon.src})`}}>
      <div className='container mx-auto pt-10 pb-24'>
        <div className='h-36 mb-4 mx-auto relative w-'>
          <Link href='/'> 
            <a>
              <Image src={Logo.src} layout='fill' objectFit='contain' />
            </a>
          </Link>
        </div>
        <div className='mx-auto w-1/2'>
          <Search />
        </div>
      </div>
    </div>

    <div className='bg-gray-800 border-b container -mt-14 mx-auto shadow-lg'>
      <div className='flex'>
        <div className='bg-gray-900 px-8 py-8 w-56'>
          <Sidebar />
        </div>
        <div className='p-8 w-full'>
          {children}
        </div>
      </div>
    </div>
  </>
)

export default Layout