import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ playbooks }) => <CategoryTemplate title='Playbooks' array={playbooks} />

export async function getStaticProps() {
  const [playbooks] = await Promise.all([fetchApi('/playbooks')])

  return {
    props: { playbooks },
    revalidate: 1
  }
}

export default Page
