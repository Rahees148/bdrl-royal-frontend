import React from 'react';
import * as style from './icon-card.module.scss'


function IconCard({data}) {
  return (
    <div className={style.cardWrapper}>
        <div className={style.icon}>
            <img src={data.icon} alt={data.title} />
        </div>
        <div className={style.title}>{data.title}</div>
    </div>
  )
}

export default IconCard