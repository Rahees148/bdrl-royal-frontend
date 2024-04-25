import React from 'react';
import classNames from 'classnames';
import * as style from './detail.module.scss';
import useWindowSize from '../../../../libs/hooks/useWindowSize'

function Detail({ data }) {
    const {isMobile} = useWindowSize();
    return (
        <div
            className={classNames(
                style.SectionTitleDetails,
                data.theme ? style[data.theme] : style['green'],
                data.size ? style[data.size] :'',
            )}
        >
            <h3 dangerouslySetInnerHTML={{ __html: data.title }} />
            
            <div
                className={classNames(style.description)}
                dangerouslySetInnerHTML={{ __html: data.description }}
            />
        </div>
    );
}

export default Detail;
