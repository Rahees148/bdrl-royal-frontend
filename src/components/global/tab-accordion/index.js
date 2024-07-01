import React, {useState, useRef} from 'react';
import * as style from './tab-accordion.module.scss';
import classNames from 'classnames';
function TabAccordion({tabsContent, theme}) {
    const [activeTab, setActiveTab] = useState(tabsContent[0].id)
    return (
        <div className={classNames(style.TabAccordionWrap, style[theme])}>
            {tabsContent.map((item, index) => (
            <div className={classNames(style.TabAccordionSec, activeTab === item.id && style.TabAccordionSecActive)}>
                <div className={classNames(style.TabAccordionSecHead)} onClick={()=>{setActiveTab(item.id)}}>
                    <i></i>
                    <span dangerouslySetInnerHTML={{ __html: item.title?.data.title }} /><span className={classNames(style.TabAccordionSecHeadArw)}></span>
                </div>
                <div className={classNames(style.TabAccordionSecDec)}>
                        <div className={classNames(style.tabContentImg)}><img src={item?.image?.url} /></div>
                        <div className={classNames(style.tabContentDec)}>
                            <h2 dangerouslySetInnerHTML={{ __html: item.title?.data.title }} />
                            <div dangerouslySetInnerHTML={{ __html: item.description?.data.description }} />
                        </div>
                </div>
            </div>
             ))}
        </div>
    )
}

export default TabAccordion