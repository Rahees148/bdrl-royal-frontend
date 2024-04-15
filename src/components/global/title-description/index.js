import React from 'react';
import classNames from 'classnames';
import * as style from './title-description.module.scss';

function TitleDescription({ data }) {
    return (
        <div
            className={classNames(
                style.SectionTitle,
                data.theme ? style[data.theme] : style['green'],
                'flex items-end justify-between',
            )}
        >
            <div>
                <h3>{data.title}</h3>
                <div className={classNames(style.SectionTagline, 'font-normal')}>
                    {data.description}
                </div>
            </div>
            {data.button_label && (
                <a className="moreBtn" href={data.button_link}>
                    {data.button_label}
                </a>
            )}
        </div>
    );
}

export default TitleDescription;
