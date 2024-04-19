import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import * as s from './header.module.scss';

import { Content } from '../../../graphql/main-menu';

import logo from '../../../images/logo.svg';
import menuIcon from '../../../images/icons/menu-icon.svg';
import DropDownMenu from './drop-down-menu';
function Header({ data }) {
    const mainMenu = Content().allStrapiMainMenu.nodes[0].mainmenu;
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
            <header className={classNames(s.header)}>
                <div className="pageWrapper">
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
                            <a className="button ml-6 mr-4 bg-black" href="#">
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
            </header>
        </>
    );
}

export default Header;
