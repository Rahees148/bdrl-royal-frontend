import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './layout.css'
import Header from './header'
import Footer from './footer'

const Layout = ({location, pageTitle, children, breadcrumb, template }) => {

  return (
    <>
      <Header pageTitle={pageTitle} location={location} template={template} breadcrumb={breadcrumb} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout