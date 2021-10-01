import React from 'react'
import { siteMetadata } from '../utils/site-metadata/siteMetadata'
import { SEO } from '../components/Seo/Seo'
import Domminus from '../public/assests/images/domminus.png'

const IndexPage: React.FC<{}> = () => {
  return (
    <>
      <SEO
        title={siteMetadata.home.title}
        description={siteMetadata.home.description}
        image={Domminus}
      ></SEO>
      <div>This is HomePage</div>
    </>
  )
}

export default IndexPage
