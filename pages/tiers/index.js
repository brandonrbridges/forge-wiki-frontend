import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ tiers }) => <CategoryTemplate title='Tiers' array={tiers} />

export async function getStaticProps() {
  const [tiers] = await Promise.all([fetchApi('/recipes')])

  return {
    props: { tiers },
    revalidate: 1
  }
}

export default Page
