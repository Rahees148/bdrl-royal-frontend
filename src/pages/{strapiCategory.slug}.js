import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/global/layout'

const Category = ({ data }) => {
    return (
            <Layout pageTitle={data.strapiCategory.name}>
        <ul className="postlist">
            {
                data.strapiCategory.posts.map(post => (
                    <li key={post.id}>
                        <Link className="postlink" to={`/${post.slug}`}><h3>{post.title}</h3></Link>
                        <div className="image-wrap">
                        <img className="cover" src={post.cover} alt={`Cover for ${post.title}`} />
                       {post.author && <img className="avatar" src={post.author.avatar} alt={`Avatar for${post.author.name}`}/>}
                        </div>
                        <p className="date">{post.date}</p>
                        {post.author && <p className="name">Written by {post.author.name}</p>}
                        <p className="description">{post.description}</p>
                    </li>
                )
                )
            }
            </ul>
            </Layout>
    )
}

export const query = graphql`
query ($id: String) {
  strapiCategory(id: {eq: $id}) {
    posts {
      author {
        avatar
        name
      }
      cover
      date(formatString: "MMMM D, YYYY")
      description
      slug
      title
      id
    }
    name
    id
    slug
  }
}
`

export const Head = ({ data }) => <title>{data.strapiCategory.name} - Strapi Gatsby Blog Site</title>

export default Category