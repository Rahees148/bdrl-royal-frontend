import { Link } from 'gatsby'
import React from 'react'
import * as style from './text-card.module.scss'
function TextCard({data}) {
  return (
    <div className={style.textCardWrapper}>
        <Link to={data.link} >
            <h5>{data.title}</h5>
            <div className={style.description} dangerouslySetInnerHTML={{__html: data.description}} />
            <Link to={data.link} >{data.button_label}</Link>
        </Link>
    </div>
  )
}

export default TextCard