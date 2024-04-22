// src/pages/index.js
import * as React from 'react';
import { Fade } from 'react-awesome-reveal';
import Layout from '../../../components/global/layout';
import LeaderShipDetails from '../../../components/leadership-details';


const LeaderShipDetailsPage = ({location}) => {
    return (
        <Layout location={location} pageTitle="Home Page" template="inner" breadcrumb={{
            links: [
                {
                    title:'About',
                    url:'',
                },
                {
                    title:'Leadership',
                    url:'/about/leadership',
                }
            ],
            title: 'Details'
        }} >
            <Fade>
                <LeaderShipDetails />
            </Fade>
            
        </Layout>
    );
};

export default LeaderShipDetailsPage;
