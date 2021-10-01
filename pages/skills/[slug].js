import { fetchApi } from '@/helpers/api'

import SkillTemplate from '@/templates/SkillTemplate'

const Skill = ({ skill }) => <SkillTemplate skill={skill} />

export async function getStaticPaths() {
  const skills = await fetchApi('/skills')

  return {
    paths: skills.map(skill => ({
      params: {
        slug: skill.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const skills = await fetchApi(`/skills?slug=${params.slug}`)

  return {
    props: {
      skill: skills[0]
    },
    revalidate: 1
  }
}

export default Skill