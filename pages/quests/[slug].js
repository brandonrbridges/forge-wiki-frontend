import { fetchApi } from '@/helpers/api'

import QuestTemplate from '@/templates/QuestTemplate'

const Quest = ({ quest }) => <QuestTemplate quest={quest} />

export async function getStaticPaths() {
  const quests = await fetchApi('/quests')

  return {
    paths: quests.map(quest => ({
      params: {
        slug: quest.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const quests = await fetchApi(`/quests?slug=${params.slug}`)

  return {
    props: {
      quest: quests[0]
    },
    revalidate: 1
  }
}

export default Quest