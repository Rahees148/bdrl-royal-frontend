import React from 'react';
import classNames from 'classnames';
import * as style from './stack.module.scss';

function Stack({ data }) {
    return (
        <div
            className={classNames(
                style.SectionStack,
                data.size ? data.size ==='small' ? style.SectionStackSmall : '' :'',
                data.theme ? style[data.theme] : style['green'],
                'flex items-end justify-between',
                data.className && data.className
            )}
        >
        <div>
            <h2 dangerouslySetInnerHTML={{ __html: data.title }} />
            {data.tagLine &&
                <div className={classNames(style.SectionTagline, 'font-normal')}>
                    {data.tagLine}
                </div>
            }
            {data.description &&
                <div
                    className={classNames(style.SectionDescription)}
                    dangerouslySetInnerHTML={{ __html: data.description }}
                />
            }
             
        </div>
    </div>
    );
}

export default Stack;
