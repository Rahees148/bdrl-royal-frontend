import React from 'react';
import classNames from 'classnames';
import * as style from './leadership.module.scss'; 
import LeaderShipCardImage from '../../images/leadership-pic1.png'

function LeaderShip({ data }) {
    return (
        <div className={classNames(style.LeaderShipSec, 'flex gap-10')}> 
                <div className={classNames(style.LeaderShipCard)}>
                    <div className={classNames(style.LeaderShipCardImage)}>
                    <img src={LeaderShipCardImage} alt='Abdul Latheef Uppala' />
                    </div>
                    <div className={classNames(style.LeaderShipCardDetails)}>
                        <h4>Abdul Latheef Uppala</h4>
                        <aside>MANAGING DIRECTOR</aside>
                        <a className={classNames(style.LeaderShipCardBtn,'moreBtn white')} href='#'>Read More +</a>
                    </div>
                </div> 
                <div className={classNames(style.LeaderShipCard)}>
                    <div className={classNames(style.LeaderShipCardImage)}>
                    <img src={LeaderShipCardImage} alt='Abdul Latheef Uppala' />
                    </div>
                    <div className={classNames(style.LeaderShipCardDetails)}>
                        <h4>Abdul Latheef Uppala</h4>
                        <aside>MANAGING DIRECTOR</aside>
                        <a className={classNames(style.LeaderShipCardBtn,'moreBtn white')} href='#'>Read More +</a>
                    </div>
                </div> 
                <div className={classNames(style.LeaderShipCard)}>
                    <div className={classNames(style.LeaderShipCardImage)}>
                    <img src={LeaderShipCardImage} alt='Abdul Latheef Uppala' />
                    </div>
                    <div className={classNames(style.LeaderShipCardDetails)}>
                        <h4>Abdul Latheef Uppala</h4>
                        <aside>MANAGING DIRECTOR</aside>
                        <a className={classNames(style.LeaderShipCardBtn,'moreBtn white')} href='#'>Read More +</a>
                    </div>
                </div> 
                <div className={classNames(style.LeaderShipCard)}>
                    <div className={classNames(style.LeaderShipCardImage)}>
                    <img src={LeaderShipCardImage} alt='Abdul Latheef Uppala' />
                    </div>
                    <div className={classNames(style.LeaderShipCardDetails)}>
                        <h4>Abdul Latheef Uppala</h4>
                        <aside>MANAGING DIRECTOR</aside>
                        <a className={classNames(style.LeaderShipCardBtn,'moreBtn white')} href='#'>Read More +</a>
                    </div>
                </div> 
        </div>
    
  )
}

export default LeaderShip;