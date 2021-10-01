import { fetchApi } from '@/helpers/api'

import MaterialTemplate from '@/templates/MaterialTemplate'

const Material = ({ material }) => <MaterialTemplate material={material} />

export async function getStaticPaths() {
  const materials = await fetchApi('/materials')

  return {
    paths: materials.map(material => ({
      params: {
        slug: material.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const materials = await fetchApi(`/materials?slug=${params.slug}`)

  return {
    props: {
      material: materials[0]
    },
    revalidate: 1
  }
}

export default Material