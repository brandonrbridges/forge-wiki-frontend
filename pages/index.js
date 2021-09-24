import Link from 'next/link'

import { fetchApi } from '@/helpers/api'

import Layout from 'layouts/Layout'
import ReactMarkdown from 'react-markdown'

const Home = ({ homepage, recipes }) => {
  const seo = {
    metaTitle: 'Home',
    metaDescription: 'Welcome to the Forge & Fortune Wiki.'
  }
  
  return (
    <Layout seo={seo}>
      <div className='gap-4 grid grid-cols-3'>
        <div className='col-span-2'>
          <div className='bg-green-500/50 mb-4 p-4'>
            <p className='text-white'>Please note: This Wiki is under development.</p>
          </div>
          <h1 className='mb-2 text-white'>{homepage.hero.title}</h1>
          <hr className='my-4' />
          <div className='mb-4'>
            <ReactMarkdown className='text-gray-300'>
              {homepage.hero.introduction}
            </ReactMarkdown>
          </div>

          <h2 className='mb-2 text-white'>Encyclopedia</h2>
          <hr className='my-4' />
          <p className='mb-4 text-gray-300'>Some text here.</p>

          
        </div>
        <div className='gap-y-4 grid grid-cols-1'>
          <div className='bg-gray-700 p-4'>
            <h3 className='text-white'>Announcements</h3>
            <hr className='my-4' />
            <div className='gap-y-4 grid grid-cols-1'>
              <div>
                <h4 className='text-gray-200'>Welcome to the new Wiki</h4>
                <p className='mb-2 text-gray-400 text-xs'>Posted 60 mins ago by Ghost</p>
                <p className='mb-2 text-gray-300'>
                  Welcome to the new Wiki for Forge and Fortune! We have done our best to include every bit of information you'll need to thrive in Forge and Fortune.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-gray-700 p-4'>
            <h3 className='text-white'>Want to participate?</h3>
            <hr className='my-4' />
            <p className='text-gray-300'>This is a community-maintained wiki, which means that you can help out!.</p>
          </div>
        </div>
      </div>
      

    </Layout>
  )
}

export async function getStaticProps() {
  const [homepage, recipes] = await Promise.all([
    fetchApi('/homepage'),
    fetchApi('/recipes'),
  ])

  return {
    props: {
      homepage,
      recipes
    },
    revalidate: 1
  }
}

export default Home

