// src/pages/index.js
import * as React from 'react';
import Layout from '../../components/global/layout';
import { Fade } from 'react-awesome-reveal';
import Tabs from '../../components/tabs';

const CentersOfExcellence = () => {
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
                <div className='pageWrapper'>
                    <Tabs />
                    <div className='h-12'></div>
                </div>
            </Fade>
            
        </Layout>
    );
};

export default CentersOfExcellence;
