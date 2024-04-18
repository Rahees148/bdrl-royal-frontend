import React from 'react'

function ResponsiveImage({desktopImage,mobileImage, alt, className}) {
  return (
    <picture>
        <source srcSet={desktopImage} media="(min-width: 768px)" />
        <source srcSet={mobileImage} media="(max-width: 767px)" />
        <img src={desktopImage} alt={alt} className={className ? className : ''} />
    </picture>
  )
}

export default ResponsiveImage