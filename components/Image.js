import { getStrapiMedia } from '@/helpers/media'

const Image = ({ image, style }) => {
  const url = getStrapiMedia(image)

  return <img src={url} alt={image.alternativeText || image.name} />
}

export default Image