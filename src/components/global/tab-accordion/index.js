import React, {useState, useRef} from 'react';
import * as style from './tab-accordion.module.scss';
import classNames from 'classnames';
function TabAccordion() {
    return (
        <div className={classNames(style.TabAccordionWrap)}>
            <div className={classNames(style.TabAccordionSec,style.TabAccordionSecActive)}>
                <div className={classNames(style.TabAccordionSecHead)}>
                    <i></i>Sports Injuries <span className={classNames(style.TabAccordionSecHeadArw)}></span></div>
                <div className={classNames(style.TabAccordionSecDec)}>
                    Sports injuries cover a range of conditions, such as knee sports injuries, including ACL (Anterior Cruciate Ligament), PCL (Posterior Cruciate Ligament), and MPFL (Medial Patellofemoral Ligament) issues.
                </div>
            </div>
            <div className={classNames(style.TabAccordionSec)}>
                <div className={classNames(style.TabAccordionSecHead)}>
                    <i></i>Sports Injuries <span className={classNames(style.TabAccordionSecHeadArw)}></span></div>
                <div className={classNames(style.TabAccordionSecDec,'hidden')}>
                    Sports injuries cover a range of conditions, such as knee sports injuries, including ACL (Anterior Cruciate Ligament), PCL (Posterior Cruciate Ligament), and MPFL (Medial Patellofemoral Ligament) issues.
                </div>
            </div>
        </div>
    )
}

export default TabAccordion