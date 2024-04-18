import React from 'react';
import classNames from 'classnames';
import * as style from './text-image.module.scss';
import doctorImage from '../../images/image-1.png';
import opinionIcon from '../../images/icons/second-opinion-icon.svg'

function TextImage({ data }) {
    return (
        <section className={classNames(style.BgGradientGolden)}>
                <div className='bg-white absolute top-0 left-0 md:block hidden w-[50%] h-[100%] z-0'></div>
                <div className={classNames(style.TextImageWrap,'pageWrapper flex relative z-30 align-middle')}>
                    <div className={classNames(style.TextImageDec, 'w-[45%] bg-white py-40 pr-40 flex flex-col justify-center items-start')}>
                        <div className={classNames(style.TextImageTagline,'flex items-center')}>
                        <img src={data.icon.url} alt='Second Opinion' />
                        {data.sub_title}</div>
                        <h2>{data.Title}</h2>
                        <aside dangerouslySetInnerHTML={{__html: data.description.data.childMarkdownRemark.html}}></aside>
                        <a href={data.button_link} className={classNames(style.TextImagebtn, 'button bg-primary')}>{data.button_label}</a>
                    </div>
                    <div className={classNames(style.ClipContainer,'w-[55%]  pt-8')} >
                        <img src={data.image.url} alt={data.title} />
                        <div className={classNames(style.Clip,'bg-white')}></div>
                    </div>
                </div>
            </section>
    
  )
}

export default TextImage;
