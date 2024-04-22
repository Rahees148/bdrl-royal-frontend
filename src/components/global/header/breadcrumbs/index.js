import React from 'react'
import * as style from './breadcrumbs.module.scss';
import classNames from 'classnames';

function Breadcrumbs({data}) {
    console.log('Breadcrumbs',data);
  return (
    <div className={classNames( style.breadcrumbs)}>
        <div className='pageWrapper'>
            <ul>
                {data.links && data.links.map((link, index)=>(
                    <li key={index}>
                        {link.url !== '' ?(
                            <a href={link.url}>{link.title}</a>
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