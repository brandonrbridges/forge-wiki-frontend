import { fetchApi } from '@/helpers/api'

import RecipeTemplate from '@/templates/RecipeTemplate'

const Recipe = ({ recipe }) => <RecipeTemplate recipe={recipe} />

export async function getStaticPaths() {
  const recipes = await fetchApi('/recipes')

  return {
    paths: recipes.map(recipe => ({
      params: {
        slug: recipe.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const recipes = await fetchApi(`/recipes?slug=${params.slug}`)

  return {
    props: {
      recipe: recipes[0]
    },
    revalidate: 1
  }
}

export default Recipe