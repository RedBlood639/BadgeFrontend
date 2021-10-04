import type { NextPage } from 'next'
import SEO from '../componets/Seo/seo'
import siteMetadata from '../utils/site-metadata/siteMetadata'
const Home: NextPage = () => {
  return (
    <>
      <SEO
        title={siteMetadata.home.title}
        description={siteMetadata.home.description}
      />
      {'Welcome to WHATABYTE!'}
    </>
  )
}

export default Home
