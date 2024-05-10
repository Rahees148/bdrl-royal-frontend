import React from 'react'
import * as style from './breadcrumbs.module.scss';
import classNames from 'classnames';
import { Link } from 'gatsby';

function Breadcrumbs({data}) {
  return (
    <div className={classNames( style.breadcrumbs)}>
        <div className='pageWrapper'>
            <ul>
                {data.links && data.links.map((link, index)=>(
                    <li key={index}>
                        {link.url !== '' ?(
                            <Link to={link.url}>{link.title}</Link>
                        ):(
                            <>{link.title}</>
                        )}
                    </li>
                ))}
                {data.title && <li className={style.active}>{data.title}</li>}
                
            </ul>
        </div>
    </div>
  )
}

export default Breadcrumbs