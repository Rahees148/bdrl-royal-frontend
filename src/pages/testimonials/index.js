import React from 'react' 
import InnerBanner from '../../components/inner-banner';
import { Banners } from '../../graphql/banners';
import Layout from '../../components/global/layout'; 
import TestimonialListCard from '../../components/testimonial-list-card';
import { Content } from '../../graphql/testimonials/testimonials';

const Testimonials = () => {  
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'News & Events')[0];
    const testimonials = Content().allStrapiTestimonial.nodes;
    
  return (
    <Layout  pageTitle="Testimonials" template="inner" breadcrumb={{
        links: [
            {
                title:'Home',
                url:'/',
            }
        ],
        title: 'Testimonials'
    }}> 
                <InnerBanner waterMark={false} data={
                    {
                        title:pageBanners.banner.Title.data.Title,
                        description:pageBanners.banner.Description.data.Description,
                        desktopMedia: pageBanners.banner.desktop_media?.url,
                        mobileMedia: pageBanners.banner?.mobile_media?.url,
                    }
                } /> 
                <div className='pageWrapper'> 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 py-8 sm:py-[60px]'>
                   {testimonials && testimonials.map( (testimonial, index) => (
                    <TestimonialListCard key={index} data={testimonial}/>
                   ))}
                    
                </div>
                </div>
       
  </Layout>
  )
}

export default Testimonials