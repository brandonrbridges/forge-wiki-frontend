const getStrapiURL = (path = '') => {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`
}

const fetchApi = async (path) => {
  const url = getStrapiURL(path)
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export { fetchApi, getStrapiURL }