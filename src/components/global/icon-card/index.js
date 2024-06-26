import React from 'react';
import * as style from './icon-card.module.scss'
import classNames from 'classnames';


function IconCard({data, bold=false}) {
  return (
    <div className={classNames(style.cardWrapper, style[data.variant])}>
        <div className={classNames(style.icon, !data.title && style.fullWidth)}>
            <img src={data?.icon} alt={data.title} />
        </div>
        {data.title && <div className={classNames(style.title, bold && style.bold)}>{data.title}</div>}
    </div>
  )
}

export default IconCard