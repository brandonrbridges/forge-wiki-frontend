import { getStrapiURL } from '@/helpers/api'
import { GlobalContext } from 'pages/_app'
import { useContext } from 'react'

const SEO = ({ seo }) => {
  const { defaultSEO, siteName } = useContext(GlobalContext)

  const seoWithDefaults = {
    ...defaultSEO, ...seo
  }

  const fullSeo = {
    ...seoWithDefaults,
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
  }
}

export default SEO