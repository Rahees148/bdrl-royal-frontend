import React from 'react'
import classNames from 'classnames';
import * as style from './menu-overlay.module.scss';
import Footerlogo from '../../../../images/footer-logo.svg';
import FbIcon from '../../../../images/icons/facebook-icon.svg';
import XIcon from '../../../../images/icons/x-icon.svg';
import InstaIcon from '../../../../images/icons/insta-icon.svg';
import YoutubeIcon from '../../../../images/icons/youtube-icon.svg';
function MenuOverlay({mainMenu, isOpen, setIsOpen}) {
  return (
    <div className={classNames(style.MenuOverlay, isOpen ? style.fadeIn : style.fadeOut)}>
        <div className={style.greenBg}></div>
        <div className='pageWrapper relative grid grid-cols-12 gap-8 '>
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
                    <ol>
                        <li>Home</li>
                        <li>About</li>    
                        <li>Centers of Excellence</li>
                        <li>Doctors</li>
                        <li>Top Procedure</li>
                        <li>Technologies</li>
                        <li>Health & Wellness</li>
                        <li>Contact</li>
                        {/* {mainMenu.map((menu) => (
                            <li key={menu.id}>
                                <Link to={`/${menu.url}`}>
                                    {menu.title}
                                </Link>
                            </li>
                        ))} */}
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuOverlay