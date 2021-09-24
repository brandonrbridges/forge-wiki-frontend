import { getStrapiURL } from '@/helpers/api'

const getStrapiMedia = (media) => {
  const image = media.url.startsWith('/') ? getStrapiURL(media.url) : media.url

  return image
}

export { getStrapiMedia }