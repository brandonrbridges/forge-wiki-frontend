import Image from 'next/image'
import Link from 'next/link'

import { fetchApi } from '@/helpers/api'

import HeroTemplate from '@/templates/HeroTemplate'

const Hero = ({ hero }) => <HeroTemplate hero={hero} />

export async function getStaticPaths() {
  const heroes = await fetchApi('/heroes')

  return {
    paths: heroes.map(hero => ({
      params: {
        slug: hero.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const heroes = await fetchApi(`/heroes?slug=${params.slug}`)

  return {
    props: {
      hero: heroes[0]
    },
    revalidate: 1
  }
}

export default Hero