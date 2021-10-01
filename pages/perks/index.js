import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ perks }) => <CategoryTemplate title='Perks' array={perks} />

export async function getStaticProps() {
  const [perks] = await Promise.all([fetchApi('/perks')])

  return {
    props: { perks },
    revalidate: 1
  }
}

export default Page
