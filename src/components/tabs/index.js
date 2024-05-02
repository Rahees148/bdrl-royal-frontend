import React, { useState } from 'react'
import * as style from './tabs.module.scss';

const tabsContent = [
    {
        tabTitle: 'Bariatric Nutrition and Weight Management',
        tabContent: 'Transform your life with our Bariatric Nutrition and Weight Management program. Our comprehensive approach combines personalized nutrition plans, lifestyle modifications, and expert guidance to help you achieve sustainable weight loss and improved health.',
        image: 'https://picsum.photos/420/314',
        id:1
    },
    {
        tabTitle: 'Maternal and Paediatric Nutrition',
        tabContent: 'Transform your life with our Bariatric Nutrition and Weight Management program. Our comprehensive approach combines personalized nutrition plans, lifestyle modifications, and expert guidance to help you achieve sustainable weight loss and improved health.',
        image: 'https://picsum.photos/420/314',
        id:2
    },
    {
        tabTitle: 'Critical Care Nutrition',
        tabContent: 'Transform your life with our Bariatric Nutrition and Weight Management program. Our comprehensive approach combines personalized nutrition plans, lifestyle modifications, and expert guidance to help you achieve sustainable weight loss and improved health.',
        image: 'https://picsum.photos/420/314',
        id:3
    },
    {
        tabTitle: 'Geriatric Nutrition',
        tabContent: 'Transform your life with our Bariatric Nutrition and Weight Management program. Our comprehensive approach combines personalized nutrition plans, lifestyle modifications, and expert guidance to help you achieve sustainable weight loss and improved health.',
        image: 'https://picsum.photos/420/314',
        id:4
    },
    {
        tabTitle: 'Bariatric Nutrition and Weight Management',
        tabContent: 'Transform your life with our Bariatric Nutrition and Weight Management program. Our comprehensive approach combines personalized nutrition plans, lifestyle modifications, and expert guidance to help you achieve sustainable weight loss and improved health.',
        image: 'https://picsum.photos/420/314',
        id:5
    },
    {
        tabTitle: 'Maternal and Paediatric Nutrition',
        tabContent: 'Transform your life with our Bariatric Nutrition and Weight Management program. Our comprehensive approach combines personalized nutrition plans, lifestyle modifications, and expert guidance to help you achieve sustainable weight loss and improved health.',
        image: 'https://picsum.photos/420/314',
        id:6
    },
    {
        tabTitle: 'Critical Care Nutrition',
        tabContent: 'Transform your life with our Bariatric Nutrition and Weight Management program. Our comprehensive approach combines personalized nutrition plans, lifestyle modifications, and expert guidance to help you achieve sustainable weight loss and improved health.',
        image: 'https://picsum.photos/420/314',
        id:7
    },
    {
        tabTitle: 'Geriatric Nutrition',
        tabContent: 'Transform your life with our Bariatric Nutrition and Weight Management program. Our comprehensive approach combines personalized nutrition plans, lifestyle modifications, and expert guidance to help you achieve sustainable weight loss and improved health.',
        image: 'https://picsum.photos/420/314',
        id:7
    },
]

function Tabs() {
    const [activeTab, setActiveTab] = useState(tabsContent[0])
  return (
    <div className={style.tabsContainer}>
        <div className={style.tabsHeader}>
            {tabsContent.map((item, index) => (
                <div onClick={()=>{setActiveTab(item)}} className={activeTab.id === item.id && style.active}>{item.tabTitle}</div>
            ))}
        </div>
        <div className={style.tabsBody}>
            {activeTab && 
                <div className={style.tabContent}>
                    <div><img src={activeTab.image} /></div>
                    <div>
                        <h2>{activeTab.tabTitle}</h2>
                        <p>{activeTab.tabContent}</p>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Tabs