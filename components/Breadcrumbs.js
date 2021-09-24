import NextBreadcrumbs from 'nextjs-breadcrumbs'

const Breadcrumbs = () => {
  return <NextBreadcrumbs 
    containerClassName='mb-4 text-sm'
    listClassName='flex'
    activeItemClassName='capitalize mr-2 text-white'
    inactiveItemClassName='capitalize mr-2 text-gray-500'
  />
}

export default Breadcrumbs