import { fetchApi } from '@/helpers/api'

import CategoryTemplate from '@/templates/CategoryTemplate'

const Page = ({ recipes }) => <CategoryTemplate title='Recipes' array={recipes} />

export async function getStaticProps() {
  const [recipes] = await Promise.all([ fetchApi('/recipes') ])

  return {
    props: { recipes },
    revalidate: 1
  }
}

export default Page
