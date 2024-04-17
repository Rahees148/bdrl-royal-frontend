import React from 'react';
import * as style from './image-card.module.scss'


function ImageCard({data}) {
  return (
    <div className={style.cardWrapper}>
        <div className={style.image}>
            <img src={data.image} alt={data.title} />
        </div>
        <div className={style.title}>{data.title}</div>
        <div className={style.description}>{data.description}</div>
    </div>
  )
}

export default ImageCard