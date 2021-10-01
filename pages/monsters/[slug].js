import { fetchApi } from '@/helpers/api'

import MonsterTemplate from '@/templates/MonsterTemplate'

const Monster = ({ monster }) => <MonsterTemplate monster={monster} />

export async function getStaticPaths() {
  const monsters = await fetchApi('/monsters')

  return {
    paths: monsters.map(monster => ({
      params: {
        slug: monster.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const monsters = await fetchApi(`/monsters?slug=${params.slug}`)

  return {
    props: {
      monster: monsters[0]
    },
    revalidate: 1
  }
}

export default Monster