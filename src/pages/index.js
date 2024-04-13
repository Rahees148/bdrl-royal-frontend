// src/pages/index.js
import * as React from 'react'
import Layout from '../components/global/layout'
import HeroBanner from '../components/hero-banner'
import BookAnAppointment from '../components/book-an-appointment'
import CentresOfExcellence from '../components/centres-of-excellence'
import bannerVideo from '../videos/welcomePageDeskCn.mp4'
import { Fade } from "react-awesome-reveal";

import { Content } from "../graphql/home";

const IndexPage = ({ data }) => {
  const pageData = Content().allStrapiPage.nodes[0];
  console.log(pageData)
  const sliderData = [
    {
      image:'https://picsum.photos/id/183/1440/515',
      video:bannerVideo,
      title:'The Royal Experience.',
      description: 'Elevating Healthcare Experience to New Heights of Comfort & Excellence',
      buttonLabel: 'Experience Healthcare',
      buttonUrl: 'https://picsum.photos/id/1/1440/122',
      bannerType:'video',
    },
    {
      image:'https://picsum.photos/id/184/1920/1080',
      title:'The Royal Experience.',
      description: 'Elevating Healthcare Experience to New Heights of Comfort & Excellence',
      buttonLabel: 'Experience Healthcare',
      buttonUrl: 'https://picsum.photos/id/1/1440/122',
      bannerType:'image',
    },
    {
      image:'https://picsum.photos/id/185/1920/1080',
      title:'The Royal Experience.',
      description: 'Elevating Healthcare Experience to New Heights of Comfort & Excellence',
      buttonLabel: 'Experience Healthcare',
      buttonUrl: 'https://picsum.photos/id/1/1920/1080',
      bannerType:'image',
    },
    {
      image:'https://picsum.photos/id/186/1440/515',
      title:'The Royal Experience.',
      description: 'Elevating Healthcare Experience to New Heights of Comfort & Excellence',
      buttonLabel: 'Experience Healthcare',
      buttonUrl: 'https://picsum.photos/id/1/1440/122',
      bannerType:'image',
    }
  ]
    return (
        <Layout pageTitle="Home Page">
          <Fade>
            <HeroBanner sliderItems={sliderData} />
          </Fade>
          <BookAnAppointment />
          <Fade>
            <CentresOfExcellence />
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