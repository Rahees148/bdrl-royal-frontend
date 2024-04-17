import React from 'react';
import classNames from 'classnames';
import * as style from './title-description.module.scss';

function TitleDescription({ data }) {
    return (
        <>
            {data.variant === 'details' ? (
                <div
                    className={classNames(
                        style.SectionTitleDetails,
                        data.theme ? style[data.theme] : style['green'],
                    )}
                >
                    <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
                    <div className={style.spacer}></div>
                    <div
                        className={classNames(style.description)}
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                </div>
            ) : (
                <div
                    className={classNames(
                        style.SectionTitle,
                        data.theme ? style[data.theme] : style['green'],
                        'flex items-end justify-between',
                    )}
                >
                    <div>
                        <h2>{data.title}</h2>
                        <div className={classNames(style.SectionTagline, 'font-normal')}>
                            {data.description}
                        </div>
                    </div>
                    {data.button_label && (
                        <a className={classNames('moreBtn', data.theme)} href={data.button_link}>
                            {data.button_label}
                        </a>
                    )}
                </div>
            )}
        </>
    );
}

export default TitleDescription;
