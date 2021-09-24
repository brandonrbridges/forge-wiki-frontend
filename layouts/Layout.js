import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'

import Logo from '@/assets/images/site-logo.png'

const Layout = ({ children, seo }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700;900&display=swap" rel="stylesheet" />

      <title>{seo ? seo.metaTitle + ' |' : ''} Forge &amp; Fortune Wiki</title>
    </Head>
    {/* <Navigation /> */}
    <div className='py-8 w-full' style={{ background: `url(https://www.forgeandfortune.com/assets/images/dungeonBackgrounds/A02.jpg) top center / contain no-repeat`}}>
      <div className='mb-8 text-center'>
        <Link href='/'>
          <a className='block h-56 relative mx-auto w-xl'>
            <Image src={Logo.src} layout='fill' objectFit='contain' />
          </a>
        </Link>
      </div>
      <div className='container bg-gray-800 border-b mx-auto shadow-lg'>
        <div className='flex'>
          <div className='bg-gray-900 px-8 py-8 w-56'>
            <Link href='/'>
              <a className='block h-24 relative mx-auto w-full'>
                <Image src={Logo.src} layout='fill' objectFit='contain' />
              </a>
            </Link>
            <Sidebar />
          </div>
          <div className='p-8 w-full'>
            {children}
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Layout