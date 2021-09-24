import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ bosses }) => <CategoryTemplate title='Bosses' array={bosses} />

export async function getStaticProps() {
  const [bosses] = await Promise.all([fetchApi('/recipes')])

  return {
    props: { bosses },
    revalidate: 1
  }
}

export default Page
