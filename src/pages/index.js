// src/pages/index.js
import * as React from 'react'
import Layout from '../components/global/layout'
import HeroBanner from '../components/hero-banner'
import BookAnAppointment from '../components/book-an-appointment'

const IndexPage = ({ data }) => {
  const sliderData = [
    {
      image:'https://picsum.photos/id/183/1440/515',
      title:'Image 1'
    },
    {
      image:'https://picsum.photos/id/184/1440/515',
      title:'Image 2'
    },
    {
      image:'https://picsum.photos/id/185/1440/515',
      title:'Image 3'
    },
    {
      image:'https://picsum.photos/id/186/1440/515',
      title:'Image 4'
    }
  ]
    return (
        <Layout pageTitle="Home Page">
          <HeroBanner sliderItems={sliderData} />
          <BookAnAppointment />
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
                    trdf
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