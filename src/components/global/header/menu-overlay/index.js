import React, { useRef } from 'react'
import classNames from 'classnames';
import { Link } from 'gatsby';
import * as style from './menu-overlay.module.scss';
import Footerlogo from '../../../../images/footer-logo.svg';
import FbIcon from '../../../../images/icons/facebook-icon.svg';
import XIcon from '../../../../images/icons/x-icon.svg';
import InstaIcon from '../../../../images/icons/insta-icon.svg';
import YoutubeIcon from '../../../../images/icons/youtube-icon.svg';
import DropDownMenu from '../drop-down-menu';
import { useState } from 'react';
import useClickOutside from '../../../../libs/hooks/useClickOutside';
function MenuOverlay({mainMenu, isOpen, setIsOpen}) {
    const [showDropMenu, setShowDropMenu] = useState('');
    const tempRefs = [];

    mainMenu.map(() => {
        tempRefs.push(React.createRef());
    });
    const ref = useRef(null);
    const dropRef = useRef(tempRefs)
    useClickOutside(
        ref,
        () => {
            setShowDropMenu('');
        },
        [dropRef]
    );
  return (
    <div className={classNames(style.MenuOverlay, isOpen ? style.fadeIn : style.fadeOut)}>
        <div className={style.greenBg}></div>
        <div className='pageWrapper'>
            <div className={classNames(style.MenuOverlayWrap,'relative grid grid-cols-12 gap-8')}>
                <div className={classNames(style.leftCol,'col-span-4 bg-primary')}>
                        <ul>
                            <li>Specialities</li>
                            <li>OPD Schedule</li>    
                            <li>Feedback</li>
                            <li>Insurance</li>
                            <li>Careers</li> 
                        </ul>
                        <div className={classNames(style.leftColBtm)}>
                            <div className={classNames(style.leftColBtmlogo)}>
                                <img src={Footerlogo} alt="Bdrl"  />
                            </div>
                            <div className={classNames(style.leftColBtmAdrs)}>Building No. 336, Plot No. 141, South Al Ghubra, Muscat, Sultanate of Oman </div>
                            <div className={classNames(style.leftColBtmSocialMedia,'flex gap-[13px]')}>
                                <img src={FbIcon} alt='Facebook' />
                                <img src={XIcon} alt='Twitter' />
                                <img src={InstaIcon} alt='Instagram' />
                                <img src={YoutubeIcon} alt='Youtube' />
                            </div>
                        </div>
                </div>
                <div className={classNames(style.rightCol,'flex col-span-8 ')}>
                    <span className={style.close} onClick={()=>{setIsOpen(false)}}>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9196 1.53938L1.16235 20.6505M1.16227 1.53931L19.9195 20.6505" stroke="white" stroke-width="1.75427" stroke-linecap="round"/>
                        </svg>
                    </span>
                    <div className={style.menuItem}>
                        <ol  ref={ref} >
                            <li><Link to={`/`} > Home </Link></li>
                            {mainMenu.map((menu, index) => (
                                <li key={menu.id}  ref={dropRef.current[index]} >
                                    {menu.dropdown ? (
                                        <>
                                        <button className={showDropMenu === menu.title  && style.open}  onClick={()=>{setShowDropMenu(menu.title)}}>
                                            {menu.title} 
                                            <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1389 15.62C30.5997 16.2621 29.6528 16.3365 29.0238 15.7861L16 4.39028L2.97616 15.7861C2.34717 16.3365 1.40022 16.2621 0.861088 15.62C0.321955 14.9779 0.394798 14.0113 1.02379 13.4609L15.0238 1.2109C15.5855 0.719377 16.4144 0.719377 16.9762 1.2109L30.9762 13.4609C31.6051 14.0113 31.678 14.9779 31.1389 15.62Z" fill="white"/>
                                            </svg>
    </button>
                                        <ul className={showDropMenu === menu.title && style.open}>
                                            {menu.dropdown.map((drop, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={`${drop.url}`}
                                                    >
                                                        {drop.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        </>
                                    ) : (
                                        <Link to={`/${menu.url}`} >
                                            {menu.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            
        </div>
        <div className={style.blackOverlay}></div>
    </div>
  )
}

export default MenuOverlay