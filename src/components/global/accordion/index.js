import React, {useState, useRef} from 'react';
import * as style from './accordion.module.scss';
import classNames from 'classnames';
//  accordionitem component
const AccordionItem = ({ title, item, isOpen, onClick }) => {
    const contentHeight = useRef()
     return(
       <div className={style.wrapper} >
       <button className={ classNames(style.titleContainer, isOpen && style.active)} onClick={onClick} >
        <h6>{title}</h6>
        <spn className={`arrow ${isOpen ? 'active' : ''}`} /> 
       </button>
   
        <div ref={contentHeight} className={style.itemContainer} style={
             isOpen
             ? { height: contentHeight.current.scrollHeight + 20 }
             : { height: "0px" }
            }>
         <div className={classNames(style.itemContent, isOpen && style.active)} dangerouslySetInnerHTML={{ __html: item }} />
        </div>
      </div>
     )
   }

// main Accordion component
const Accordion = ({title, item}) => {
  const [activeIndex, setActiveIndex] = useState(false);

  // const handleItemClick = (index) => {
  //  setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  // };
 return (
  <div>
    <AccordionItem
     title={title}
     item={item}
     isOpen={activeIndex}
     onClick={() => setActiveIndex(!activeIndex)}
    />
  </div>
 )
}

export default Accordion;