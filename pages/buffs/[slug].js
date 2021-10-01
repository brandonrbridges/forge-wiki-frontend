import { fetchApi } from '@/helpers/api'

import BuffTemplate from '@/templates/BuffTemplate'

const Buff = ({ buff }) => <BuffTemplate buff={buff} />

export async function getStaticPaths() {
  const buffs = await fetchApi('/buffs')

  return {
    paths: buffs.map(buff => ({
      params: {
        slug: buff.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const buffs = await fetchApi(`/buffs?slug=${params.slug}`)

  return {
    props: {
      buff: buffs[0]
    },
    revalidate: 1
  }
}

export default Buff