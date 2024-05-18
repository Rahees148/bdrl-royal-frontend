import { Link } from 'gatsby'
import React, {useState} from 'react'
import classNames from 'classnames';
import * as style from './sort-filter-for-news.module.scss'
import SortFilterIcon from '../../../images/icons/sort-icon.svg'; 
function SortFilterForNews({setSearchKey}) { 
  return (
    <div className={classNames(style.SortFilterForNews)}>
      <div className={classNames(style.SortFilterIcon)}>
        <img src={SortFilterIcon} alt="Sort Icon" />
        Sort
      </div>
      <div className={classNames(style.SortFilterBtnSec)}>
        <div className={classNames(style.SortFilterDropDown)}>Newest</div>
        <div className={classNames(style.SortFilterBtn, style.active)}>All</div>
        <div className={classNames(style.SortFilterBtn)}>News</div>
        <div className={classNames(style.SortFilterBtn)}>Events</div>
      </div>
    </div>
  )
}

export default SortFilterForNews