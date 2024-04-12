import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './layout.css'
import Header from './header'
import Footer from './footer'
import Fade from 'react-reveal/Fade'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
        query {
            allStrapiCategory {
                nodes {
                        name
                        slug
                        id
                    }
          }
        }
    `)

  return (
    <>
      <Header data={data} />
      <main>
        <Fade top distance="10%" duration="1500">{children}</Fade></main>
      <Footer />
    </>
  )
}

export default Layout