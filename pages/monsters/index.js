import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ monsters }) => <CategoryTemplate title='Monsters' array={monsters} />

export async function getStaticProps() {
  const [monsters] = await Promise.all([fetchApi('/recipes')])

  return {
    props: { monsters },
    revalidate: 1
  }
}

export default Page
