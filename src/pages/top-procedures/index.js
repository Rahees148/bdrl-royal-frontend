// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import { Banners } from '../../graphql/banners';
import { AllProcedures } from '../../graphql/top-procedure';
import TextCard from '../../components/global/text-card';
import SearchForProcedures from '../../components/global/search-for-procedures';
import { useState } from 'react';

const Specialties = () => {
    
    const allProcedures = AllProcedures().allStrapiTopProcedur.nodes;
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'Top Procedures')[0];
    const [filteredProcedure, setFilteredProcedure] = useState(allProcedures)
    const setSearchKey = (val) =>{
        console.log(val);
        if(val !== ''){
            const tempFilter = allProcedures.filter(prop => prop.title.toLowerCase().includes(val.toLowerCase()) ||  prop.about_procedure?.description?.data.description.toLowerCase().includes(val))
            setFilteredProcedure([...tempFilter])
        }else{
            setFilteredProcedure(allProcedures)
        }
    }
    return (
        <Layout  pageTitle="Doctors" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                }
            ],
            title: 'Top Procedures'
        }}>
            <Fade>
                <InnerBanner
                waterMark={false}
                data={
                    {
                        title:pageBanners.banner.Title.data.Title,
                        description:pageBanners.banner.Description.data.Description,
                        desktopMedia: pageBanners.banner.desktop_media?.url,
                        mobileMedia: pageBanners.banner?.mobile_media?.url,
                    }
                } />
                <div className='pageWrapper'>
                        <SearchForProcedures setSearchKey={setSearchKey}/>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pt-[35px] sm:pt-[45px] pb-[55px] sm:pb-[75px]'>
                        {filteredProcedure && filteredProcedure.map(list => (
                            <TextCard data={{
                                title: list.title,
                                description: list.about_procedure?.description?.data.description,
                                button_label: 'know more',
                                link: '/top-procedures/'+list?.slug
                            }} />
                        ))}
                        {filteredProcedure && filteredProcedure.length <= 0 &&
                            <div>No result found </div>
                        }
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};
export const Head = () => <title>Top Procedures</title>;
export default Specialties;
