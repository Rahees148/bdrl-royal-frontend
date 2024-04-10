//src/components/layout.js
//src/components/layout.js
import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './layout.css';


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
    <div className="pagewrapper">
      <header>
        <h1>Strapi Gatsby Blog</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          {
            data.allStrapiCategory.nodes.map(node => (
              <li key={node.id}>
                <Link to={`/${node.slug}`}>{node.name}</Link>
              </li>
            )
            )
          }
        </ul>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to the hypest blog on the interweb. </h2><p>Checkout something cool!</p>
          <h2 className="pageTitle">{pageTitle}</h2>
        </section>
        <section className="content">
          {children}
        </section>
      </main>
      <footer>
        <div>
          <h2>About</h2>
          <p>Demo blog site using Strapi and Gatsby, Oct 2023</p>
        </div>
        <div>
          <h2>Article</h2>
          <p><a href="https://strapi.io/blog">Build a Blog Site using Strapi and Gatsby</a></p>
        </div>
      </footer>
    </div>
  )
}

export default Layout