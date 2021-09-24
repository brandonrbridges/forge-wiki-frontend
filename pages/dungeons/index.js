import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ dungeons }) => <CategoryTemplate title='Dungeons' array={dungeons} />

export async function getStaticProps() {
  const [dungeons] = await Promise.all([fetchApi('/recipes')])

  return {
    props: { dungeons },
    revalidate: 1
  }
}

export default Page
