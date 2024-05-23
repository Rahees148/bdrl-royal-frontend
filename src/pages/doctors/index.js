// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import InnerBanner from '../../components/inner-banner';
import DoctorBanner from '../../images/banner/doctor-banner.jpeg'
import useWindowSize from '../../libs/hooks/useWindowSize';
import DoctorCard from '../../components/doctor-card';
import {AllDoctors} from '../../graphql/doctors/doctors';
import { Banners } from '../../graphql/banners';
import SpecialtySelect from '../../components/speciality-select';
import { useState } from 'react';

const doctors = () => {
    const doctors = AllDoctors().allStrapiDoctor.nodes;
    const [filteredDoctor, setFilteredDoctor] = useState(doctors)
    const pageBanners = Banners().allStrapiBannerForListingPage.nodes.filter(b => b.page_title === 'Doctors')[0];
    const onSpecialtyChange = (selectedSpecialty) =>{
        const tempFilter = selectedSpecialty === 'Select Speciality' ? doctors : doctors.filter(c => (c.speciality?.title === selectedSpecialty || c.centers_of_excellence?.title === selectedSpecialty));
        setFilteredDoctor([...tempFilter]);
    }
    return (
        <Layout  pageTitle="Doctors" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                }
            ],
            title: 'Doctors'
        }}>
            <Fade> 
                <InnerBanner data={
                    {
                        title:pageBanners.banner.Title.data.Title,
                        description:pageBanners.banner.Description.data.Description,
                        desktopMedia: pageBanners.banner.desktop_media?.url,
                        mobileMedia: pageBanners.banner?.mobile_media?.url,
                    }
                } />
            </Fade>
            <div className='pt-[35px]'>
                <div className='pageWrapper flex justify-end'>
                    <SpecialtySelect variant={'standalone'} onSpChange={(sp)=>{onSpecialtyChange(sp)}}  />
                </div>
            </div>
            <Fade>
               
                <section className='pt-[30px] sm:pb-[100px]'>
                    <div className='pageWrapper'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[12px] sm:gap-x-8 gap-y-[86px] pt-[98px]'>
                            {filteredDoctor && filteredDoctor.map((doctor, index) =>(
                                <DoctorCard doctor={doctor} key={index}/>
                            ))}
                        </div>
                    </div>
                </section>
            </Fade>
            
        </Layout>
    );
};

export default doctors;
