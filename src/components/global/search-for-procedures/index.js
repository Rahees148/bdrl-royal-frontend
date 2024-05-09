import { Link } from 'gatsby'
import React from 'react'
import classNames from 'classnames';
import * as style from './search-for-procedures.module.scss'
import SearchIcon from '../../../images/icons/search-icon.svg';
function SearchForProcedures({data}) {
  return (
    <div className={classNames(style.SearchForProcedures)}>
        <img src={SearchIcon} alt="Search Icon" />
        <input type='text' placeholder='Search For Procedures'/>
    </div>
  )
}

export default SearchForProcedures