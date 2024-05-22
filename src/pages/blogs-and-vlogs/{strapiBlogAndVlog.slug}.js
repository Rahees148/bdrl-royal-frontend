import * as React from 'react'
import { graphql } from 'gatsby'
import { Content } from '../../graphql/blogs-vlogs';
import Layout from '../../components/global/layout'
import Article from '../../components/article';
import ArticleListCard from '../../components/article-list-card';

const BlogsAndVlogs = ({ data }) => {
  const pageData = data.strapiBlogAndVlog;
  const articleList = Content().allStrapiBlogAndVlog.nodes.filter(item =>item.category === pageData.category && item.id !== pageData.id);
    return (
            <Layout pageTitle={pageData.title} template="inner" breadcrumb={{
              links: [
                  {
                      title:'Home',
                      url:'/',
                  },
                  {
                    title:'Blogs and Vlogs',
                    url:'/blogs-and-vlogs',
                }
              ],
              title: pageData.title
          }}>
            <div className='pageWrapper'>
            <div className=' pt-[43px] pb-[72px]  grid grid-cols-12 gap-8' >
                <div className='sm:col-span-8 col-span-12'>
                  <Article author={true} pageData={pageData} />
                </div>
                <div className='sm:col-span-4 col-span-12'>
                  {articleList.length > 0 &&
                  <>
                    <h4 className='text-[30px] font-semibold text-primary mb-[22px]'>Related Posts</h4>
                    {articleList && articleList.map((article, index) => (
                      <ArticleListCard blog={true} linkTo={'/blogs-and-vlogs/'} related={true} item={article} key={index} />
                    ))}
                  </>
                  }
                </div>
              </div>
                
           </div>
            </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    strapiBlogAndVlog(id: {eq: $id}) {
      category
      id
      media {
        url
      }
      title
      description {
        data {
          description
        }
      }
      youtube_video_id
      doctor {
        Image {
          url
        }
        Name
        slug
        designation
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.strapiBlogAndVlog.title}</title>

export default BlogsAndVlogs