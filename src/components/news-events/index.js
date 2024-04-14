import React, {useRef} from 'react'
import classNames from 'classnames'
import * as style from './news-events.module.scss'; 
import TitleDescription from '../global/title-description';
import NewsEventsPic from '../../images/news-pic1.png'

function NewsEvents({data}) {   
  return (
    <section className={classNames(style.NewsEvents, '')}>
        <div className={classNames(style.NewsEventsTop,'bg-primary')}>
            <div className="pageWrapper">
            <TitleDescription data={{
                theme:"white",
                title:"News & events",
                description: "Get the latest updates from us.",
                button_label: "View All",
                button_link:"#"
            }} />
            </div>
        </div>
        <div className={classNames(style.NewsEventsBtm)}>
            <div className="pageWrapper">
                <div className={classNames(style.NewsEventsCardwrap,'grid grid-cols-12 gap-6')}>
                    <div className={classNames(style.NewsEventsCard,'col-span-4')}>
                        <div className={classNames(style.NewsEventsCardImage)}><img src={NewsEventsPic} alt='News Pic'/></div>
                        <div className={classNames(style.NewsEventsCardTag, style.NewsTag)}>News</div>
                        <h4>Badr Al Samaa Royal Hospitals introduces ERCP modality  </h4>
                        <aside>Badr Al Samaa Royal Hospital introduces ERCP (Endoscopic Retrograde  in its its Gastroenterology Centre of Excellence ...</aside>
                        <a className='moreBtn' href='#' >Read More</a>
                    </div>

                    <div className={classNames(style.NewsEventsCard,'col-span-4')}>
                        <div className={classNames(style.NewsEventsCardImage)}><img src={NewsEventsPic} alt='News Pic'/></div>
                        <div className={classNames(style.NewsEventsCardTag, style.EventsTag)}>Events</div>
                        <h4>Badr Al Samaa Royal Hospitals introduces ERCP modality  </h4>
                        <aside>Badr Al Samaa Royal Hospital introduces ERCP (Endoscopic Retrograde  in its its Gastroenterology Centre of Excellence ...</aside>
                        <a className='moreBtn' href='#' >Read More</a>
                    </div>

                    <div className={classNames(style.NewsEventsCard,'col-span-4')}>
                        <div className={classNames(style.NewsEventsCardImage)}><img src={NewsEventsPic} alt='News Pic'/></div>
                        <div className={classNames(style.NewsEventsCardTag, style.NewsTag)}>News</div>
                        <h4>Badr Al Samaa Royal Hospitals introduces ERCP modality  </h4>
                        <aside>Badr Al Samaa Royal Hospital introduces ERCP (Endoscopic Retrograde  in its its Gastroenterology Centre of Excellence ...</aside>
                        <a className='moreBtn' href='#' >Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    ) 
}
  export default NewsEvents