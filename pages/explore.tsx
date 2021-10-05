import React from 'react'
import SEO from '../componets/Seo/seo'
import siteMetadata from '../utils/site-metadata/siteMetadata'
import Link from 'next/link'
const ExploreView = () => {
  return (
    <>
      <SEO
        title={siteMetadata.home.title}
        description={siteMetadata.home.description}
      />
      {'Explore View'}
    </>
  )
}

export default ExploreView
