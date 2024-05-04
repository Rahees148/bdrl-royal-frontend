import React from 'react'
import * as style from './key-highlight.module.scss'

function KeyHighlights({data}) {
  return (
    <div className='py-[45px] px-[95px] bg-white rounded-5'>
        <ul className={style.keyHighlights}>
            {data && data.map((item, index)=>(
                <li>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default KeyHighlights