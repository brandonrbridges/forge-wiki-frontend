import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ heroes }) => <CategoryTemplate title='Heroes' array={heroes} />

export async function getStaticProps() {
  const [heroes] = await Promise.all([ fetchApi('/heroes') ])

  return {
    props: { heroes },
    revalidate: 1
  }
}

export default Page
