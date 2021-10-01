import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ skills }) => <CategoryTemplate title='Skills' array={skills} />

export async function getStaticProps() {
  const [skills] = await Promise.all([fetchApi('/skills')])

  return {
    props: { skills },
    revalidate: 1
  }
}

export default Page
