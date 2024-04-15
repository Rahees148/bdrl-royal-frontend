import React from 'react';
import classNames from 'classnames';
import * as style from './text-image.module.scss';
import doctorImage from '../../images/image-1.png';
import opinionIcon from '../../images/icons/second-opinion-icon.svg'

function TextImage({ data }) {
    return (
        <section className={classNames(style.BgGradientGolden)}>
                <div className='bg-white absolute top-0 left-0 w-[50%] h-[100%] z-0'></div>
                <div className="pageWrapper flex relative z-30 ">
                    <div className={classNames(style.TextImageDec, 'w-[55%] bg-white py-40 pr-48')}>
                        <div className={classNames(style.TextImageTagline,'flex items-center')}>
                        <img src={opinionIcon} alt='Second Opinion' />
                            Second Opinion</div>
                        <h4>Advised for Surgery?</h4>
                        <aside>Be Sure of diagnosis before getting operated! Consult our expert surgeons to get a second opinion.</aside>
                        <div className={classNames(style.TextImagebtn, 'button bg-primary')}>Consult our expert surgeons</div>
                    </div>
                    <div className={classNames(style.ClipContainer,'w-[45%]  pt-8')} >
                        <img src={doctorImage} alt='test' />
                        <div className={classNames(style.Clip,'bg-white')}></div>
                    </div>
                </div>
            </section>
    
  )
}

export default TextImage;
