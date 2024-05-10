import React from 'react'
import * as style from './alternative-box.module.scss';
import classNames from 'classnames';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function AlternativeBox({data, alter, index, length}) {
    const percentage = (index / length) * 100;
  return (
    <div className={classNames(style.contentBox, 'grid grid-cols-12 gap-8 mb-5')}>
        <div className={classNames(!alter && 'order-last', alter ? 'bg-primary': style.bgGradient , 'col-span-5 rounded-[10px] p-8')}>
            <div className={style.title}>
                <span>
                    <CircularProgressbar value={percentage} text={index} styles={buildStyles({
                        textSize: '40px',
                        pathColor: `#E4FF85`,
                        textColor: '#FFFFFF',
                    })} 
                /></span>
                <h4>{data.title}</h4>
            </div>
            <div className={classNames(style.contentBoxSec)}>
                <h5>{data.subtitle}</h5>
                <div className={classNames(style.contentBoxDec)} dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>
        </div>
        <div className='col-span-7 rounded-[10px]'>
            <img src={data.image} alt={data.title} />
        </div>
    </div>
  )
}

export default AlternativeBox