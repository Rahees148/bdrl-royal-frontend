import { Link } from 'gatsby'
import React, {useRef, useState} from 'react'
import classNames from 'classnames';
import * as style from './sort-filter-for-news.module.scss'
import SortFilterIcon from '../../../images/icons/sort-icon.svg'; 
import useClickOutside from '../../../libs/hooks/useClickOutside';
import SpecialtySelect from '../../speciality-select';
function SortFilterForNews({setSelectedCategory, blog=false, selectedCategory, updateSort, categoryList}) { 
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
        {!blog &&
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
        }
        {blog &&
          <SpecialtySelect onSpChange={(sp)=>{updateSort(sp)}}  />
        }
        <div className={classNames(style.SortFilterBtn, selectedCategory === 'All' && style.active)} onClick={()=>{
          setSelectedCategory('All')
        }}>All</div>
        {categoryList && categoryList.length > 0 && categoryList.map((category, index)=>(
          <div key={index} className={classNames(style.SortFilterBtn, selectedCategory === category && style.active)} onClick={()=>{
            setSelectedCategory(category)
          }}>{category}</div>
        ))}
        
       
      </div>
    </div>
  )
}

export default SortFilterForNews