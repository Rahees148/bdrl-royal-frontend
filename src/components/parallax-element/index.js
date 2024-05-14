import React from 'react'
import * as style from './parallax-element.module.scss'
import parallaxImg from '../.../../../images/icons/parallax-element_1.svg'

function ParallaxElement() {
  return (
    <img className={style['parallaxImg']} src={parallaxImg} alt='Bdr Al Sama Royal' />
  )
}

export default ParallaxElement