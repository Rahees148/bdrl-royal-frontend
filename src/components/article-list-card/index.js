import { Link } from 'gatsby'
import React from 'react'
import * as style from './article-list-card.module.scss'
import classNames from 'classnames';

function ArticleListCard({item, related}) {
  return (
    <div className={classNames(style.ArticleListCard, related && style.related)}>
      <Link to={'/news-and-events/'+item.slug}>
        <div className={classNames(style.ArticleListCardImage)}><img src={item.image?.url} /></div>
        <div className={classNames(style.ArticleListCardDec)}>
          <div className={classNames(style.ArticleListCardTag, style[item.category])}>{item.category}</div>
          <h4>{item.title}</h4>
          {!related &&
            <>
              <aside dangerouslySetInnerHTML={{__html: item.summary}} />
              <div className={classNames(style.ArticleListCardFtr)}>
                  <Link to={'/news-and-events/'+item.slug}>{item.button_label} 
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.76636" cy="10.584" r="5.09448" fill="#E4FF85"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96911 18.009C14.2937 18.009 17.7995 14.5032 17.7995 10.1786C17.7995 5.85395 14.2937 2.34814 9.96911 2.34814C5.64448 2.34814 2.13867 5.85395 2.13867 10.1786C2.13867 14.5032 5.64448 18.009 9.96911 18.009ZM8.37927 7.41418C8.60862 7.18483 8.98046 7.18483 9.20981 7.41418L11.5589 9.76331C11.7883 9.99265 11.7883 10.3645 11.5589 10.5939L9.20981 12.943C8.98046 13.1723 8.60862 13.1723 8.37927 12.943C8.14992 12.7136 8.14992 12.3418 8.37927 12.1124L10.3131 10.1786L8.37927 8.24472C8.14992 8.01537 8.14992 7.64352 8.37927 7.41418Z" fill="#023321"/>
                                        </svg>
                  </Link>
                  <span className={classNames(style.ArticleListCardDate)}>{item.article_date}</span>
              </div>
            </>
          }
        </div>
      </Link>
    </div>
  )
}

export default ArticleListCard