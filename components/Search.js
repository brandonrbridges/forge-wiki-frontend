import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Fuse from 'fuse.js'
import { RiContactsBookLine } from 'react-icons/ri'

const Search = ({ items }) => {
  const router = useRouter()
  
  const [term, setTerm] = useState('')
  const [results, setResults] = useState()

  const fuse = new Fuse(items, {
    keys: ['name']
  })

  const search = (term) => {
    setTerm(term)

    setResults(fuse.search(term))
  }

  return (
    <div className=''>
      <div className='relative'>
        <input type='text' name='search' onChange={e => search(e.currentTarget.value)} className='bg-gray-700 focus:bg-gray-600 p-2 rounded w-full' placeholder={`Search`} autoComplete='off' />
      </div>

      {results && (
        <div className='bg-gray-700 mt-1 p-2'>
          {results.map(result => (
            <Link href={`${router.route}/${result.item.slug}`}>
              <a className='block'>{result.item.name}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search