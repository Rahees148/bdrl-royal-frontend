import { Link } from 'gatsby'
import React from 'react'

function ArticleListCard({item}) {
  return (
    <div>
        <img src={item.image?.url} />
        <span>{item.category}</span>
        <h4>{item.title}</h4>
        <div dangerouslySetInnerHTML={{__html: item.description?.data?.childMarkdownRemark?.html}} />
        <div>
            <Link to={item.slug}>{item.button_label}</Link>
            <span>{item.publishedAt}</span>
        </div>
    </div>
  )
}

export default ArticleListCard