import React from 'react'
import classNames from 'classnames'
import * as style from './news-events.module.scss'; 
import TitleDescription from '../global/title-description';
import { Content } from "../../graphql/news-and-events"

function NewsEvents() {   
    const newsAndEvents = Content().allStrapiNewsAndEvent.nodes;
    console.log(Content().allStrapiNewsAndEvent.nodes)
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
                    {newsAndEvents && newsAndEvents.map((item, index)=>(
                        <div key={index} className={classNames(style.NewsEventsCard,'col-span-4')}>
                            <div className={classNames(style.NewsEventsCardImage)}>
                                <img src={item.image?.url} alt={item.title}/>
                            </div>
                            <div className={classNames(style.NewsEventsCardTag, item.category === 'News' ? style.NewsTag : style.EventsTag)}>{item.category}</div>
                            <h4>{item.title}</h4>
                            <aside>{item.summary}</aside>
                            <a className='moreBtn' href={'/news-and-events/'+item.slug} >{item.button_label}</a>
                        </div>
                    ))}
                    

                    
                </div>
            </div>
        </div>
    </section>
    ) 
}
  export default NewsEvents