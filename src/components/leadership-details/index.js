import React from 'react'
import TitleDescription from '../global/title-description'

function LeaderShipDetails() {
  return (
    <div>
        <section className='bg-primary py-[80px]'>
                <div className='pageWrapper'>
                    <TitleDescription
                        data={{
                            variant: 'details',
                            theme: 'white',
                            title:'Our Leadership',
                            description:'Years of dedication by this dynamic group of eminent and renowned visionery directors has led to a dream come true with the Badr Al Samaa Group of Hospitals & Medical Centres. The aim was to provide world class, superior multi-specialty healthcare at affordable rates, coupled with the warmth of caring hands. Backed by superior technology, this aim has been fulfilled.',
                        }}
                    />
                </div>
            </section>
            <section className='circle-pattern-bg py-[90px]'>
                <div className='pageWrapper'>
                    
                </div>
            </section>
    </div>
  )
}

export default LeaderShipDetails