// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import Tabs from '../../components/tabs';
import {AllSpecialty} from '../../graphql/specialties';
import SpecialtyCard from '../../components/SpecialtyCard';
import InnerBanner from '../../components/inner-banner';


import DoctorBanner from '../../images/banner/doctor-banner.jpeg'

const Specialties = () => {
    const specialtyList = AllSpecialty().allStrapiSpeciality.nodes;
    console.log(specialtyList)
    return (
        <Layout  pageTitle="Doctors" template="inner" breadcrumb={{
            links: [
                {
                    title:'Home',
                    url:'/',
                }
            ],
            title: 'Specialties'
        }}>
            <Fade>
                <InnerBanner data={
                    {
                        title:'Specialities',
                        description:'Specialized Medical Excellence',
                        desktopMedia: DoctorBanner,
                        mobileMedia: DoctorBanner,
                    }
                } />
                <div className='pageWrapper'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-[55px] sm:py-[115px]'>
                        {specialtyList && specialtyList.map(list => (
                            <SpecialtyCard data={list} key={list.id} />
                        ))}
                    </div>
                </div>
            </Fade>
            
        </Layout>
    );
};
export const Head = () => <title>Specialties</title>;
export default Specialties;
