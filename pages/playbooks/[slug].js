import { fetchApi } from '@/helpers/api'

import PlaybookTemplate from '@/templates/PlaybookTemplate'

const Playbook = ({ playbook }) => <PlaybookTemplate playbook={playbook} />

export async function getStaticPaths() {
  const playbooks = await fetchApi('/playbooks')

  return {
    paths: playbooks.map(playbook => ({
      params: {
        slug: playbook.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const playbooks = await fetchApi(`/playbooks?slug=${params.slug}`)

  return {
    props: {
      playbook: playbooks[0]
    },
    revalidate: 1
  }
}

export default Playbook