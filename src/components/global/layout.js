import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './layout.css'
import Header from './header'
import Footer from './footer'

const Layout = ({ pageTitle, variant, children }) => {
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
        {children}
      </main>
      <Footer variant={variant} />
    </>
  )
}

export default Layout