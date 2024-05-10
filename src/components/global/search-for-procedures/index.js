import { Link } from 'gatsby'
import React, {useState} from 'react'
import classNames from 'classnames';
import * as style from './search-for-procedures.module.scss'
import SearchIcon from '../../../images/icons/search-icon.svg';
import { useDebounce } from '../../../libs/hooks/useDebounce';
function SearchForProcedures({setSearchKey}) {
  const handleChange = useDebounce(value => {
    if (value.length >= 3) {
        setSearchKey(value)
      }else{
        setSearchKey('')
      }
    }, 500);
  return (
    <div className={classNames(style.SearchForProcedures)}>
        <img src={SearchIcon} alt="Search Icon" />
        <input type='text' placeholder='Search For Procedures' onChange={(e)=>{handleChange(e.target.value)}}/>
    </div>
  )
}

export default SearchForProcedures