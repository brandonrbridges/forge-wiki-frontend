import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ quests }) => <CategoryTemplate title='Quests' array={quests} />

export async function getStaticProps() {
  const [quests] = await Promise.all([fetchApi('/recipes')])

  return {
    props: { quests },
    revalidate: 1
  }
}

export default Page
