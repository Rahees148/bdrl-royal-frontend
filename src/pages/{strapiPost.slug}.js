import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/global/layout';

const BlogPost = ({ data }) => {
    console.log(data);
    return (
        <Layout pageTitle={data.strapiPost.title}>
            <img
                className="postcover"
                src={data.strapiPost.cover}
                alt={`Cover for ${data.strapiPost.title}`}
            />
            <p className="postdate">{data.strapiPost.date}</p>
            {data.strapiPost.author && (
                <>
                    <img
                        className="postavatar"
                        src={data.strapiPost.author.avatar}
                        alt={`Avatar for${data.strapiPost.author.name}`}
                    />
                    <p className="postauthor">Written by {data.strapiPost.author.name}</p>
                </>
            )}
            {data.strapiPost.category && (
                <p className="postcategory">
                    <Link to={`/${data.strapiPost.category.slug}`}>
                        Category: {data.strapiPost.category.name}
                    </Link>
                </p>
            )}{' '}
            <div
                className="postcontent"
                dangerouslySetInnerHTML={{ __html: data.strapiPost.content[0].children[0].text }}
            />
        </Layout>
    );
};

export const query = graphql`
    query ($id: String) {
        strapiPost(id: { eq: $id }) {
            author {
                avatar
                name
            }
            category {
                name
                slug
            }
            content {
                children {
                    text
                }
            }
            cover
            date(formatString: "MMMM D, YYYY")
            description
            slug
            title
        }
    }
`;

export const Head = ({ data }) => <title>{data.strapiPost.title} - Strapi Gatsby Blog Site</title>;

export default BlogPost;
