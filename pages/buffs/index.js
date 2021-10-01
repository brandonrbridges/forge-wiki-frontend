import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ buffs }) => <CategoryTemplate title='Buffs' array={buffs} />

export async function getStaticProps() {
  const [buffs] = await Promise.all([fetchApi('/buffs')])

  return {
    props: { buffs },
    revalidate: 1
  }
}

export default Page
