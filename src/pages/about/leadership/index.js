// src/pages/index.js
import * as React from 'react';
import Layout from '../../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import TitleDescription from '../../../components/global/title-description';

import { Leaders } from '../../../graphql/about/leaders';
import LeaderShip from '../../../components/leadership';


const AnOverviewPage = ({location}) => {
    const pageData = Leaders().allStrapiLeadership.nodes[0];
    return (
        <Layout pageTitle={pageData.title}  template="inner" breadcrumb={{
            links: [
                {
                    title:'About',
                    url:'',
                }
            ],
            title: 'Leadership'
        }}>
            <Fade>

            <section className='bg-primary py-[80px]'>
                <div className='pageWrapper'>
                    <TitleDescription
                        data={{
                            variant: 'details',
                            theme: 'white',
                            title:pageData?.title_description?.title,
                            description:pageData?.title_description?.description?.data?.description,
                        }}
                    />
                </div>
            </section>
            <section className='circle-pattern-bg'>
                <div className='pageWrapper'>
                    <LeaderShip data={pageData.leaders}/>
                </div>
            </section>
            </Fade>
            
        </Layout>
    );
};

export default AnOverviewPage;
