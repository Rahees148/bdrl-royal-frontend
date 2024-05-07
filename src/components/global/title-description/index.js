import React from 'react';
import classNames from 'classnames';
import * as style from './title-description.module.scss';
import useWindowSize from '../../../libs/hooks/useWindowSize'
import Stack from './stack';
import Detail from './detail';

function TitleDescription({ data }) {
    const {isMobile} = useWindowSize();
    return (
        <>
            {data.variant === 'details' ? (
               <Detail data={data} />
            ) : (
                <>
                {data.variant === 'stack' ? (
                    <Stack data={data} />
                ):(
                    <div
                    className={classNames(
                        style.SectionTitle,
                        data.size && data.size ==='small' && style.small,
                        data.theme ? style[data.theme] : style['green'],
                        'flex  justify-between',
                        data.description ? 'items-end' : 'items-center',
                        data.className && data.className
                    )}
                >
                    <div className={data.button_label && style.hasButton}>
                        <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
                        {data.description && 
                            <div className={classNames(style.SectionTagline, 'font-normal')}>
                                {data.description}
                            </div>
                        }
                    </div>
                    {data.button_label && (
                        <a className={classNames('moreBtn', data.theme)} href={data.button_link}>
                            {data.button_label}
                        </a>
                    )}
                    </div>
                )}
                </>
            )}
        </>
    );
}

export default TitleDescription;
