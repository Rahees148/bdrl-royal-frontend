import React from 'react';
import classNames from 'classnames';
import * as style from './leadership.module.scss'; 
import { Link } from 'gatsby';

function LeaderShip({ data }) {
    return (
        <div className={classNames(style.LeaderShipSec, 'flex gap-10')}> 
                {data && data.map(leader => (
                    <div className={classNames(style.LeaderShipCard)} key={leader.id}>
                        <div className={classNames(style.LeaderShipCardImage)}>
                        <img src={leader?.image?.url} alt={leader.title} />
                        </div>
                        <div className={classNames(style.LeaderShipCardDetails)}>
                            <h4>{leader.title}</h4>
                            <aside>{leader.description}</aside>
                            <Link className={classNames(style.LeaderShipCardBtn,'moreBtn white')} to={leader.link_to?.slug.toLowerCase()}>{leader.button_label}</Link>
                        </div>
                    </div> 
                ))} 
        </div>
    
  )
}

export default LeaderShip;