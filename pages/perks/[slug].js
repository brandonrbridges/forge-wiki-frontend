import { fetchApi } from '@/helpers/api'

import PerkTemplate from '@/templates/PerkTemplate'

const Perk = ({ perk }) => <PerkTemplate perk={perk} />

export async function getStaticPaths() {
  const perks = await fetchApi('/perks')

  return {
    paths: perks.map(perk => ({
      params: {
        slug: perk.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const perks = await fetchApi(`/perks?slug=${params.slug}`)

  return {
    props: {
      perk: perks[0]
    },
    revalidate: 1
  }
}

export default Perk