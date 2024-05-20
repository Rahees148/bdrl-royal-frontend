// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import { Banners } from '../../graphql/banners';
import { Content } from '../../graphql/news-and-events';
import ArticleListCard from '../../components/article-list-card';
import SortFilterForNews from '../../components/global/sort-filter-for-news';
import { useEffect } from 'react';
import useWindowSize from '../../libs/hooks/useWindowSize';

const NewsAndEvents = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [sort, setSort] = React.useState('Newest');
    const { isMobile } = useWindowSize();
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'News & Events')[0];
    const newsAndEvents = Content().allStrapiNewsAndEvent.nodes;
    const [filteredList, setFilteredList] = React.useState(newsAndEvents);

    useEffect(()=>{
        console.log(filteredList.sort((a, b) => {
            return new Date(a.article_date).getTime() - new Date(b.initialRegistration).getTime()
        }))
        
    },[sort])

   useEffect(()=>{
    if(selectedCategory === 'All'){
        setFilteredList(newsAndEvents)
    }else{
        setFilteredList(newsAndEvents.filter(item => item.category === selectedCategory))
    }
   },[selectedCategory])
    return (
        <Layout  pageTitle="News & Events" template="inner" breadcrumb={{
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
                    
                        <SortFilterForNews 
                            setSelectedCategory={setSelectedCategory} 
                            selectedCategory={selectedCategory} 
                            updateSort={(sort)=>{
                                setSort(sort);
                            }}
                        />
                     
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-8 sm:py-[60px]'>
                        {filteredList && filteredList.map((item, index) => (
                            <ArticleListCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};

export default NewsAndEvents;
