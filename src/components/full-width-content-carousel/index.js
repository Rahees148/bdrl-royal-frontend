import React, {useState} from 'react'
import classNames from 'classnames'
import * as style from './full-width-content-carousel.module.scss';

function FullWidthContentCarousel() {  
    return (
<section className='bg-bdrlGray py-12'>
            <div className='pageWrapper'>
              <div className='grid grid-cols-12 gap-8 '>
                <div lassName={classNames( style.FwCcDescription,'col-span-7  py-12 bg-white')}>
                        test
                </div>
                <div className='col-span-6  py-12 bg-black'>
                    122
                </div> 
              </div>
            </div>
          </section>
    )
}
export default FullWidthContentCarousel