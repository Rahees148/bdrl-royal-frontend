import React, { useRef, useState } from 'react'
import * as style from './tabs.module.scss';
import { Link } from 'gatsby';
import { useEffect } from 'react';
import classNames from 'classnames';
import useWindowSize from '../../libs/hooks/useWindowSize';
import TabAccordion from '../global/tab-accordion';

function Tabs({tabsContent, bg, theme="light"}) {
    const divRef = useRef(null);
    const {isMobile} = useWindowSize();
    const [activeTab, setActiveTab] = useState(tabsContent[0]);
    const [enablePrev, setEnablePrev] = useState(false)
    const [enableNext, setEnableNext] = useState(true)

    useEffect(()=>{
        if(divRef.current && !isMobile){
            divRef.current.onmousewheel = function(){return false;}
        }
    },[divRef])

    useEffect(()=>{
        if(!isMobile){
            const index = tabsContent.findIndex(x => x.id === activeTab.id);
            if(index.toString() === '0'){
                setEnableNext(true)
                setEnablePrev(false)
            }
            if(index > 0){
                setEnablePrev(true)
            }
            if(index === tabsContent.length - 1){
                setEnableNext(false)
            }
            const tabsWidth = tabsContent.length * 256;
            if(divRef.current?.clientWidth > tabsWidth){
                setEnablePrev(false);
                setEnableNext(false);
            }
        }
        
    },[activeTab, isMobile])

    const next = ()=>{
        const index = tabsContent.findIndex(x => x.id === activeTab.id);
        if(index !== tabsContent.length - 1) {
            divRef.current.scrollTo({
                top: 0,
                left: divRef.current.scrollLeft + 288,
                behavior: 'smooth'
              });
            setActiveTab(tabsContent[index + 1]);
            
        }
    }
    const prev = ()=>{
          const index = tabsContent.findIndex(x => x.id === activeTab.id);
          if(index) {
                divRef.current.scrollTo({
                    top: 0,
                    left: divRef.current.scrollLeft - 288,
                    behavior: 'smooth'
                })
                setActiveTab(tabsContent[index - 1]);
            }
         
    }
  return (
    <>
        {isMobile ? (
            <TabAccordion tabsContent={tabsContent} theme={theme} />
        ):(
            <div className={classNames(style.tabsContainer, style[theme])}>
            <div className={style.tabsHeader}  ref={divRef}>
                {tabsContent.map((item, index) => (
                    <div key={index} onClick={()=>{setActiveTab(item)}} className={activeTab.id === item.id && style.active}>
                        <Link className={style[bg]}><i></i><span dangerouslySetInnerHTML={{ __html: item.title?.data.title }} ></span></Link>
                    <span></span>
                    </div>
                ))}
            </div>
            <div className={style.tabsNavigation}>
                
                <span className={style.prev} onClick={prev} >
                {enablePrev &&
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1168_26961)">
                        <circle cx="31.8424" cy="26.2349" r="14.5833" transform="rotate(180 31.8424 26.2349)" fill="white"/>
                        </g>
                        <path d="M33.5362 31.1039C33.8091 31.3768 34.2515 31.3768 34.5243 31.1039C34.7972 30.8311 34.7972 30.3887 34.5243 30.1158L33.5362 31.1039ZM29.6553 26.2349L29.1612 25.7408C28.8883 26.0137 28.8883 26.4561 29.1612 26.7289L29.6553 26.2349ZM34.5243 22.3539C34.7972 22.0811 34.7972 21.6387 34.5243 21.3658C34.2515 21.0929 33.8091 21.0929 33.5362 21.3658L34.5243 22.3539ZM34.5243 30.1158L30.1493 25.7408L29.1612 26.7289L33.5362 31.1039L34.5243 30.1158ZM30.1493 26.7289L34.5243 22.3539L33.5362 21.3658L29.1612 25.7408L30.1493 26.7289Z" fill="black"/>
                        <defs>
                        <filter id="filter0_d_1168_26961" x="0.489502" y="0.472006" width="62.7056" height="62.7052" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="5.58976"/>
                        <feGaussianBlur stdDeviation="8.38464"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.0581405 0 0 0 0 0.0765111 0 0 0 0 0.141643 0 0 0 0.11 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1168_26961"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1168_26961" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                }
                </span>
                
                <span className={style.next} onClick={next}>
                    {enableNext &&
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_1168_26955)">
                            <circle cx="31.723" cy="26.1558" r="14.5833" fill="white"/>
                            </g>
                            <path d="M30.0292 21.2867C29.7564 21.0138 29.314 21.0138 29.0411 21.2867C28.7682 21.5596 28.7682 22.002 29.0411 22.2748L30.0292 21.2867ZM33.9102 26.1558L34.4042 26.6498C34.6771 26.377 34.6771 25.9346 34.4042 25.6617L33.9102 26.1558ZM29.0411 30.0367C28.7682 30.3096 28.7682 30.752 29.0411 31.0248C29.314 31.2977 29.7564 31.2977 30.0292 31.0248L29.0411 30.0367ZM29.0411 22.2748L33.4161 26.6498L34.4042 25.6617L30.0292 21.2867L29.0411 22.2748ZM33.4161 25.6617L29.0411 30.0367L30.0292 31.0248L34.4042 26.6498L33.4161 25.6617Z" fill="black"/>
                            <defs>
                            <filter id="filter0_d_1168_26955" x="0.370361" y="0.392924" width="62.7056" height="62.7053" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="5.58976"/>
                            <feGaussianBlur stdDeviation="8.38464"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0581405 0 0 0 0 0.0765111 0 0 0 0 0.141643 0 0 0 0.11 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1168_26955"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1168_26955" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    }
                </span>
            </div>
            <div className={style.tabsBody}>
                {activeTab && 
                    <div className={style.tabContent}>
                        <div className={classNames(style.tabContentImg)}><img src={activeTab?.image?.url} /></div>
                        <div className={classNames(style.tabContentDec)}>
                            <h2 dangerouslySetInnerHTML={{ __html: activeTab.title?.data.title }} />
                            <div dangerouslySetInnerHTML={{ __html: activeTab.description?.data.description }} />
                        </div>
                    </div>
                }
            </div>
        </div>
        )}
    </>
  )
}

export default Tabs