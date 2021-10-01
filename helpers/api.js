const getStrapiURL = (path = '') => {
  return `http://134.122.106.10:1337${path}`
}

const fetchApi = async (path) => {
  const url = getStrapiURL(path)
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export { fetchApi, getStrapiURL }