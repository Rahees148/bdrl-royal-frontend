import React from 'react'
import * as style from './key-highlight.module.scss'

function KeyHighlights({data}) {
  return (
    <div className='mt-[40px] sm:py-[45px] py-[40px] sm:px-[95px] px-[15px] bg-white rounded-[10px]'>
        <ul className={style.keyHighlights}>
            {data && data.map((item, index)=>(
                <li dangerouslySetInnerHTML={{ __html: item.title?.data.title}} />
            ))}
        </ul>
    </div>
  )
}

export default KeyHighlights