import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/global/layout'
import HeroBanner from '../components/hero-banner'

function About({ data }) {
    
  return (
    <Layout>
        <div >
            <ul className="postlist">
            {
                data.allStrapiPost.nodes.map(node => (
                    <li key={node.id}>
                        <Link className="postlink" to={`/${node.slug}`}><h3>{node.title}</h3></Link>
                        <div className="image-wrap">
                        <img className="cover" src={`${node.cover}`} alt={`Cover for ${node.title}`} />
                       {node.author?.avatar &&
                        <img className="avatar" src={`${node.author?.avatar}`} alt={`Avatar for${node.author.name}`}/>
                       }
                        </div>
                        <p className="date">{node.date}</p>
                        {node.author?.name &&
                          <p className="name">Written by {node.author?.name}</p>
                        }
                        {node.category?.name &&
                          <p className="postcategory"><Link to={`/${node.category.slug}`}>Category: {node.category.name}</Link></p>
                        }
                        <p className="description">{node.description}</p>
                    </li>
                )
                )
            }
            </ul>
        </div>
    </Layout>
  )
}
export const query = graphql`
query {
allStrapiPost(sort: {date: DESC}) {
    nodes {
      author {
        avatar 
        name
      }
      cover
      date(formatString: "MMMM D, YYYY")
      description
      id
      slug
      title
      category {
        name
        slug
      }
    }
  }
}
`

export const Head = () => <title>About Page - Strapi Gatsby Blog</title>
export default About