// src/pages/index.js
import * as React from 'react';
import { Fade } from 'react-awesome-reveal';
import Layout from '../../components/global/layout';
import LeaderShipDetails from '../../components/leadership-details';


const LeaderShipDetailsPage = () => {
    return (
        <Layout pageTitle="Home Page" variant={'home'}>
            <Fade>
                <LeaderShipDetails />
            </Fade>
            
        </Layout>
    );
};

export default LeaderShipDetailsPage;
