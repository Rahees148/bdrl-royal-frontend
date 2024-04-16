import React from 'react';
import classNames from 'classnames'; 
import * as s from './footer.module.scss';
import Footerlogo from '../../../images/footer-logo.svg';
import FbIcon from '.././../../images/icons/facebook-icon.svg';
import XIcon from '.././../../images/icons/x-icon.svg';
import InstaIcon from '.././../../images/icons/insta-icon.svg';
import YoutubeIcon from '.././../../images/icons/youtube-icon.svg';

function Footer() {
    return (
        <footer className="bg-primary pt-24.5 ">
            <div className="pageWrapper ">
                <div className={classNames(s.FooterTopSec,'py-16 grid grid-cols-12 gap-8 ')}>
                <div className={classNames(s.FooterLeft,'col-span-4 ')}>
                    <div className={classNames(s.Footerlogo)}><img src={Footerlogo} alt="Bdrl"  /></div>
                    <div className={classNames(s.FooterAdrs)}>Building No. 336, Plot No. 141, South Al Ghubra, Muscat, Sultanate of Oman </div>
                    <div className={classNames(s.FooterContact)}>
                    Email: info@brhoman.com<br></br>
                    Tel: +96822387777
                    </div>
                </div>
                <div className={classNames(s.FooterRight,'col-span-8 flex justify-between')}>
                    <div className={classNames(s.FooterLinkSec)}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Doctors</a></li>
                            <li><a href="#">Book an Appointment</a></li>
                            <li><a href="#">Top Procedures</a></li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Health & Wellness</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className={classNames(s.FooterLinkSec)}>
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Rich Legacy</a></li>
                            <li><a href="#">Leadership</a></li>
                            <li><a href="#">Quality Policy</a></li>
                            <li><a href="#">Vision & Mission</a></li> 
                        </ul>
                    </div>
                    <div className={classNames(s.FooterLinkSec)}>
                        <h4>Centres Of Excellence</h4>
                        <ul>
                            <li><a href="#">Orthopaedics & Joint Replacements</a></li>
                            <li><a href="#">Urology & Andrology</a></li>
                            <li><a href="#">Gastroenterology</a></li>
                            <li><a href="#">Mother & Child</a></li>
                            <li><a href="#">General & Laparoscopic Surgery</a></li>
                            <li><a href="#">Emergency & Critical Care</a></li>
                            <li><a href="#">ENT</a></li>
                        </ul>
                    </div>
                    <div className={classNames(s.FooterLinkSec)}>
                        <h4>Others</h4>
                        <ul>
                            <li><a href="#">Specialities</a></li>
                            <li><a href="#">OPD Schedule</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">Insurance</a></li>
                            <li><a href="#">Careers</a></li> 
                        </ul>
                    </div>
                </div>
                </div>
                <div className={classNames(s.FooterBtmSec,'py-11 flex justify-between')}>
                    <div className={classNames(s.FooterBtmLeft)}>© 2024  Badr Al Samaa Group of Hospitals and Medical Centres<span className='px-3'>|</span>Powered by Storyhouse.</div>
                    <div className={classNames(s.FooterBtmRight,'flex justify-between')}>
                        <img src={FbIcon} alt='Facebook' />
                        <img src={XIcon} alt='Twitter' />
                        <img src={InstaIcon} alt='Instagram' />
                        <img src={YoutubeIcon} alt='Youtube' />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
