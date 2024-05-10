import { Link } from 'gatsby'
import React from 'react'
import * as style from './technology-card.module.scss'
function TechnologyCard({title, image, label, slug}) {
  return (
    <Link to={slug}>
        <div className={style.box}>
            <img src={image} alt={title} />
            <div className={style.cardTitle}>
                <h2>{title}</h2>
                <Link to={slug}>
                    {label} 
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.64331" cy="9.98633" r="5.09448" fill="#E4FF85"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84606 17.4114C14.1707 17.4114 17.6765 13.9056 17.6765 9.58092C17.6765 5.25629 14.1707 1.75049 9.84606 1.75049C5.52143 1.75049 2.01562 5.25629 2.01562 9.58092C2.01562 13.9056 5.52143 17.4114 9.84606 17.4114ZM8.25622 6.81652C8.48557 6.58717 8.85742 6.58717 9.08676 6.81652L11.4359 9.16565C11.6652 9.395 11.6652 9.76684 11.4359 9.99619L9.08676 12.3453C8.85742 12.5747 8.48557 12.5747 8.25622 12.3453C8.02687 12.116 8.02687 11.7441 8.25622 11.5148L10.1901 9.58092L8.25622 7.64706C8.02687 7.41772 8.02687 7.04587 8.25622 6.81652Z" fill="#023321"/>
                    </svg>
                </Link>
            </div>
        </div>
    </Link>
  )
}

export default TechnologyCard