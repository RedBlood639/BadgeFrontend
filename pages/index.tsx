import type { NextPage } from 'next'
import SEO from '../componets/Seo/seo'
import siteMetadata from '../utils/site-metadata/siteMetadata'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <SEO
        title={siteMetadata.home.title}
        description={siteMetadata.home.description}
      />
      <Link href="/explore">{'Welcome to WHATABYTE!'}</Link>
    </>
  )
}

export default Home
