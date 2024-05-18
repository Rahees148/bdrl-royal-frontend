import { Link } from 'gatsby'
import React, {useRef, useState} from 'react'
import classNames from 'classnames';
import * as style from './sort-filter-for-news.module.scss'
import SortFilterIcon from '../../../images/icons/sort-icon.svg'; 
import useClickOutside from '../../../libs/hooks/useClickOutside';
function SortFilterForNews({setSelectedCategory, selectedCategory, updateSort}) { 
  const [ isOpen, setIsOpen] = useState(false);
  const [ selectedSort, setSelectedSort] = useState('Newest');
  const selectRef = useRef(null)
  useClickOutside(
    selectRef,
    () => {
        setIsOpen(false);
    }
);
  return (
    <div className={classNames(style.SortFilterForNews)}>
      <div className={classNames(style.SortFilterIcon)}>
        <img src={SortFilterIcon} alt="Sort Icon" />
        Sort
      </div>
      <div className={classNames(style.SortFilterBtnSec)}>
        <div ref={selectRef}  className={classNames(style.SortFilterDropDown, isOpen && style.open)}>
          <span onClick={()=>{setIsOpen(!isOpen)}}>{selectedSort}</span>
          {isOpen &&
            <ul className={style.dropdown}>
              <li onClick={()=>{
                setSelectedSort('Newest');
                setIsOpen(false);
                updateSort('Newest');
              }}>Newest</li>
              <li onClick={()=>{
                setSelectedSort('Oldest');
                setIsOpen(false);
                updateSort('Oldest');
              }}>Oldest</li>
            </ul>
          }
        </div>
        <div className={classNames(style.SortFilterBtn, selectedCategory === 'All' && style.active)} onClick={()=>{
          setSelectedCategory('All')
        }}>All</div>
        <div className={classNames(style.SortFilterBtn, selectedCategory === 'News' && style.active)} onClick={()=>{
          setSelectedCategory('News')
        }}>News</div>
        <div className={classNames(style.SortFilterBtn, selectedCategory === 'Events' && style.active)} onClick={()=>{
          setSelectedCategory('Events')
        }}>Events</div>
      </div>
    </div>
  )
}

export default SortFilterForNews