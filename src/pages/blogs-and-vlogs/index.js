// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import { Banners } from '../../graphql/banners';
import { Content } from '../../graphql/blogs-vlogs';
import ArticleListCard from '../../components/article-list-card';
import SortFilterForNews from '../../components/global/sort-filter-for-news';
import { useEffect } from 'react';
import useWindowSize from '../../libs/hooks/useWindowSize';
import { useState } from 'react';
import { removeDuplicates } from '../../libs/util';

const BlogsAndVlogs = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [sort, setSort] = React.useState('Newest');
    const { isMobile } = useWindowSize();
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'Blogs and Vlogs')[0];
    const blogsAndVlogs = Content().allStrapiBlogAndVlog.nodes;
    const [filteredList, setFilteredList] = React.useState(blogsAndVlogs);
    const [categoryList, setCategoryList] = useState([]); 

    useEffect(()=>{
        if(blogsAndVlogs.length > 0) {
            const cat = [];
            blogsAndVlogs.forEach(blogsAndVlog => { 
                cat.push(blogsAndVlog.category);
            });
            setCategoryList(removeDuplicates(cat));
        }
    },[blogsAndVlogs]);
    useEffect(()=>{
        console.log(filteredList.sort((a, b) => {
            return new Date(a.article_date).getTime() - new Date(b.initialRegistration).getTime()
        }))
    },[sort])

   useEffect(()=>{
    if(selectedCategory === 'All'){
        setFilteredList(blogsAndVlogs)
    }else{
        setFilteredList(blogsAndVlogs.filter(item => item.category === selectedCategory))
    }
   },[selectedCategory])
    return (
        <Layout  pageTitle="Blogs and Vlogs" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                }
            ],
            title: 'Blogs and Vlogs',
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
                    {!isMobile &&
                        <SortFilterForNews 
                            categoryList={categoryList}
                            setSelectedCategory={setSelectedCategory} 
                            selectedCategory={selectedCategory} 
                            updateSort={(sort)=>{
                                setSort(sort);
                            }}
                        />
                    }
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-8 sm:py-[60px]'>
                        {filteredList && filteredList.map((item, index) => (
                            <ArticleListCard linkTo={'/blogs-and-vlogs/'} key={index} item={item} blog={true} />
                        ))}
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};

export default BlogsAndVlogs;
