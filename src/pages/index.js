// src/pages/index.js
import * as React from 'react'
import Layout from '../components/global/layout'
import HeroBanner from '../components/hero-banner'
import BookAnAppointment from '../components/book-an-appointment'
import CentresOfExcellence from '../components/centres-of-excellence'
import { Fade } from "react-awesome-reveal";

import { Content } from "../graphql/home";

const IndexPage = () => {
  const pageData = Content().allStrapiHome.nodes[0];
  console.log(pageData)
    return (
        <Layout pageTitle="Home Page">
          <Fade>
            <HeroBanner sliderItems={pageData?.banner} />
          </Fade>
          <BookAnAppointment />
          <Fade>
            <CentresOfExcellence data={pageData?.centres_excellence} />
          </Fade>
          {/* Centres Of Excellence component */}
          <section className='bg-bdrlGray py-12'>
            <div className='pageWrapper'>
              test
            </div>
          </section>

          <section className='bg-bdrlGray py-12'>
            <div className='pageWrapper'>
              <div className='grid grid-cols-12 gap-8 bg-primary'>
                <div className='col-span-6  py-12'>
                        test
                </div>
                <div className='col-span-3  py-12'>
                    122
                </div>
                <div className='col-span-3  py-12'>
                    trdf
                </div>
              </div>
            </div>
          </section>
        
        </Layout>
        )
}

export default IndexPage