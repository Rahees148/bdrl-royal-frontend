// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import { Banners } from '../../graphql/banners';
import { Content } from '../../graphql/news-and-events';
import { Link } from 'gatsby';
import ArticleListCard from '../../components/article-list-card';
import SortFilterForNews from '../../components/global/sort-filter-for-news';

const NewsAndEvents = () => {
    const [searchKey, setSearchKey] = React.useState('')
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'News & Events')[0];
    const newsAndEvents = Content().allStrapiNewsAndEvent.nodes;
    console.log(newsAndEvents);
    return (
        <Layout  pageTitle="Doctors" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                }
            ],
            title: 'News & Events'
        }}>
            <Fade> 
                <InnerBanner waterMark={false} data={
                    {
                        title:pageBanners.banner.Title.data.Title,
                        description:pageBanners.banner.Description.data.Description,
                        desktopMedia: pageBanners.banner.desktop_media?.url,
                        mobileMedia: pageBanners.banner?.mobile_media?.url,
                    }
                } />
            </Fade>
            <Fade>
                <div className='pageWrapper'>
                    <SortFilterForNews/>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-8 sm:py-[60px]'>
                        {newsAndEvents && newsAndEvents.map((item, index) => (
                            <ArticleListCard item={item} />
                        ))}
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};

export default NewsAndEvents;
