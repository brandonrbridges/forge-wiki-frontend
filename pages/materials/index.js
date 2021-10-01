import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ materials }) => <CategoryTemplate title='Materials' array={materials} />

export async function getStaticProps() {
  const [materials] = await Promise.all([fetchApi('/materials')])

  return {
    props: { materials },
    revalidate: 1
  }
}

export default Page
