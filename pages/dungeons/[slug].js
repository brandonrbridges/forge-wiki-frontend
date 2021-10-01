import { fetchApi } from '@/helpers/api'

import DungeonTemplate from '@/templates/DungeonTemplate'

const Dungeon = ({ dungeon }) => <DungeonTemplate dungeon={dungeon} />

export async function getStaticPaths() {
  const dungeons = await fetchApi('/dungeons')

  return {
    paths: dungeons.map(dungeon => ({
      params: {
        slug: dungeon.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const dungeons = await fetchApi(`/dungeons?slug=${params.slug}`)

  return {
    props: {
      dungeon: dungeons[0]
    },
    revalidate: 1
  }
}

export default Dungeon