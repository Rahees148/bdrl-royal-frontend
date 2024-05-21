import * as React from 'react'
import { graphql } from 'gatsby'
import { Content } from '../../graphql/news-and-events';
import Layout from '../../components/global/layout'
import Article from '../../components/article';
import ArticleListCard from '../../components/article-list-card';

const NewsAndEvents = ({ data }) => {
  const pageData = data.strapiNewsAndEvent;
  const articleList = Content().allStrapiNewsAndEvent.nodes.filter(item =>item.category === pageData.category && item.id !== pageData.id);
    return (
            <Layout pageTitle={pageData.title} template="inner" breadcrumb={{
              links: [
                  {
                      title:'Home',
                      url:'/',
                  },
                  {
                    title:'News & Events',
                    url:'/news-and-events',
                }
              ],
              title: pageData.title
          }}>
            <div className='pageWrapper'>
              <div className=' pt-[43px] pb-[72px]  grid grid-cols-12 gap-8' >
                <div className='sm:col-span-8 col-span-12'>
                  <Article pageData={pageData} />
                </div>
                <div className='sm:col-span-4 col-span-12'>
                  {articleList.length > 0 &&
                  <>
                    <h4 className='text-[30px] font-semibold text-primary mb-[22px]'>Related Posts</h4>
                    {articleList && articleList.map((article, index) => (
                      <ArticleListCard related={true} item={article} key={index} />
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
    strapiNewsAndEvent(id: {eq: $id}) {
      button_label
      category
      id
      article_date(formatString: "MMM DD, YYYY")
      description {
        data {
          description
        }
      }
      image {
        url
      }
      slug
      summary
      title
      locale
    }
  }
`

export const Head = ({ data }) => <title>test</title>

export default NewsAndEvents