import React from 'react'
import * as style from './parallax-element.module.scss'
import parallaxImg from '../.../../../images/icons/parallax-element_1.svg'
import parallaxCircleImg from '../.../../../images/icons/circle.png'

function ParallaxElement({variant="spread", ...props}) {
  return (
    <>
      {variant === 'spread' &&
        <img className={style['parallaxImg']} {...props} src={parallaxImg} alt='Bdr Al Sama Royal' />
      }
      {variant === 'circle' &&
        <img className={style['parallaxImg']} {...props} src={parallaxCircleImg} alt='Bdr Al Sama Royal' />
      }
    </>
    
  )
}

export default ParallaxElement