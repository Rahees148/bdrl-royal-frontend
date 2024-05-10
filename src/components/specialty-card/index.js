import React from 'react';
import * as style from './specialty-card.module.scss'
import classNames from 'classnames';
import { Link } from 'gatsby';


function SpecialtyCard({data}) {
  return (
    <div className={classNames(style.cardWrapper)}>
        <div className={classNames(style.icon, !data.title && style.fullWidth)}>
            <img src={data.icon?.url} alt={data.title} />
        </div>
        {data.title && <div className={classNames(style.title)}>{data.title}</div>}
        <Link to={'/specialties/'+data.slug}>
          Know More 
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.36401" cy="10.4778" r="5.09448" fill="#E4FF85"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.56676 17.9027C13.8914 17.9027 17.3972 14.3969 17.3972 10.0723C17.3972 5.74763 13.8914 2.24182 9.56676 2.24182C5.24213 2.24182 1.73633 5.74763 1.73633 10.0723C1.73633 14.3969 5.24213 17.9027 9.56676 17.9027ZM7.97692 7.30785C8.20627 7.07851 8.57812 7.07851 8.80747 7.30785L11.1566 9.65698C11.3859 9.88633 11.3859 10.2582 11.1566 10.4875L8.80747 12.8367C8.57812 13.066 8.20627 13.066 7.97692 12.8367C7.74758 12.6073 7.74758 12.2355 7.97692 12.0061L9.91078 10.0723L7.97692 8.1384C7.74758 7.90905 7.74758 7.5372 7.97692 7.30785Z" fill="#023321"/>
          </svg>
        </Link>

    </div>
  )
}

export default SpecialtyCard