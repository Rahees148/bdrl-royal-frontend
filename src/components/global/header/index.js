import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import * as s from './header.module.scss';

import { Content } from '../../../graphql/main-menu';
import logo from '../../../images/logo.svg';
import menuIcon from '../../../images/icons/menu-icon.svg';
import DropDownMenu from './drop-down-menu';
import Breadcrumbs from './breadcrumbs';
function Header({ pageTitle, breadcrumb, template  }) {
    const progressBar = useRef(null);
    const mainMenu = Content().allStrapiMainMenu.nodes[0].mainmenu;
    useEffect(()=>{
        window.onscroll = function() {
            if(progressBar.current){
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                progressBar.current.style.width = scrolled + "%";
            }
        };

        
    },[progressBar.current])
    return (
        <>
            <div className={classNames(s.topHeader, 'bg-primary')}>
                <div className="pageWrapper">
                    <div className="flex justify-between align-middle py-4">
                        <p className="text-white text-sm">
                            Helpline +968 2684 6767 | +968 2684 8786
                        </p>
                        <ul className="flex text-white text-sm gap-8">
                            <li>Specialities</li>
                            <li>OPD Schedule</li>
                            <li>Feedback</li>
                            <li>Insurance</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
            </div>
            <header className={classNames(s.header, breadcrumb && s.hasBreadcrumb)}>
                <div className={classNames('pageWrapper', s.mainHeaderWrapper)}>
                    <Link to='/'><img src={logo} alt="Bdrl" className={s.logo} /></Link>
                    <ul className={classNames(s.mainMenuSec, 'flex gap-6 ml-auto')}>
                        {mainMenu.map((menu) => (
                            <li className={s.menuItem} key={menu.id}>
                                {menu.dropdown ? (
                                    <DropDownMenu title={menu.title} items={menu.dropdown} />
                                ) : (
                                    <Link to={`/${menu.url}`} className="text-bodyCopy text-sm">
                                        {menu.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                        </ul>
                        <ul className="flex items-center">
                        <li>
                            <a className={classNames(s.headerBtn, 'button ml-6 mr-4 bg-black')} href="#">
                                Book appointment
                            </a>
                        </li>
                        <li>
                            <a  href="#">
                                <img src={menuIcon} alt="Menu" className={s.menuIcon} />
                            </a>
                        </li>
                    </ul>
                </div>
                {template === 'inner'&& (
                    <>
                    <Breadcrumbs data={breadcrumb} />
                    <div className={s.progressContainer}>
                        <div className={s.progressBar} ref={progressBar} id="myBar"></div>
                    </div>
                    </>
                )}
                
            </header>
            
        </>
    );
}

export default Header;
