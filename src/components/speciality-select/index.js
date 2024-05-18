import React, { useState, useRef } from 'react';
import useClickOutside from '../../libs/hooks/useClickOutside';
import * as style from './select.module.scss';
import classNames from 'classnames';

import {AllSpecialty} from '../../graphql/specialties'
import {AllCentersOfExcellence} from '../../graphql/centre-of-excellence'
import { useEffect } from 'react';


function SpecialtySelect({onSpChange, variant, ...props}) {
    const specialtyList = AllSpecialty().allStrapiSpeciality.nodes;
    const centerOfExcellence = AllCentersOfExcellence().allStrapiCentersOfExcellence.nodes;
    const itemList = [...centerOfExcellence, ...specialtyList]
    const selectRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSP, setSelectedSP] = useState('Select Speciality');
   
    useEffect(()=>{
            setIsOpen(false);
            onSpChange(selectedSP)
    },[selectedSP])

    useClickOutside(
        selectRef,
        () => {
            setIsOpen(false);
        }
    );
    const handleDropDownClick = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <div ref={selectRef} className={classNames( style.SpecialitySelectBox, variant && style[variant], isOpen && style.isOpen, 'bg-gray-100 p-6 rounded-5')} {...props} >
        <div onClick={handleDropDownClick} >{selectedSP}</div> 
      {isOpen &&
        <div className={classNames( style.SpecialitySelectBoxOpen, 'bg-gray-100 p-6 pt-0 rounded-b-5')}>
          <ul className={classNames(style.SpecialitySelectUl)}>
            {selectedSP !== 'Select Speciality' &&
              <li className={classNames(style.SpecialitySelectList, 'flex items-center')} onClick={()=>{setSelectedSP('Select Speciality')}}>
                Select Speciality
              </li>
            }
            {itemList && itemList.map((sp) =>(
                <li key={sp.id} className={classNames(style.SpecialitySelectList, 'flex items-center')} onClick={()=>{setSelectedSP(sp.title)}}>
                    <img src={sp.icon.url} alt={sp.title} /> {sp.title}
                </li>
            ))}
          </ul>
        </div>
      }
      </div>
  )
}

export default SpecialtySelect