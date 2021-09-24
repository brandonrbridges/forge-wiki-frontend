const Recipes = ({ recipes }) => {
  return (
    <>
      {recipes.map(recipe => (
        <>
          {recipe.slug}
        </>
      ))}
    </>
  )
}

export default Recipes