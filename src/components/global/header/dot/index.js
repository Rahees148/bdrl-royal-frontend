import React from 'react'
import * as style from './dot.module.scss'
import classNames from 'classnames'
import { useState } from 'react'
function Dot() {
    const [active, setActive] = useState(false)
  return (
    <div className={classNames(style.container, active && style.hover)} onClick={()=>{setActive(!active)}}>
        <div className={style.dot}></div>
        <div className={classNames(style.dot, style.l2)}></div>
        <div className={classNames(style.dot, style.l3)}></div>
    </div>
  )
}

export default Dot