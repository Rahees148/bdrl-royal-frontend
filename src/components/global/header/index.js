import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import * as s from './header.module.scss';

import logo from '../../../images/logo.svg';

function Header({ data }) {
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
                    <img src={logo} alt="Bdrl" className={s.logo} />
                    <ul className="flex gap-6">
                        <li>
                            <Link to="/" className="text-bodyCopy text-m">
                                Home
                            </Link>
                        </li>
                        {data.allStrapiCategory.nodes.map((node) => (
                            <li key={node.id}>
                                <Link to={`/${node.slug}`} className="text-bodyCopy text-m">
                                    {node.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a className="button ml-6 bg-black" href="#">
                                Book appointment
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
