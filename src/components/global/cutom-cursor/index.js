import React, { useState } from 'react'
import * as style from './custom-cursor.module.scss';
import classNames from 'classnames';
function CustomCursor({targetedClass}) {
    const [cursorX, setCursorX ] = useState();
    const [cursorY, setCursorY ] = useState();
    window.addEventListener('mousemove',(e)=>{
        setCursorX(e.pageX)
        setCursorY(e.pageY)
    })
  return (
    <div className={classNames(style.cursor, 'customCursor')} style={{
        left: cursorX-275 + 'px',
        top: cursorY-275 + 'px'
    }}></div>
  )
}

export default CustomCursor