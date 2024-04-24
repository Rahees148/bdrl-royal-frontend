import classNames from 'classnames';
import * as style from './leadership-form.module.scss'; 
import { Link } from 'gatsby';import React from 'react';


function LeadershipForm() {
  return (
    <div className={classNames(style.LeaderShipForm)}>
      <div> 
        <label class="block"> 
                <input type="text" className={classNames(style.FormInput,'')} placeholder='Enter your name' />
        </label>
        <label class="block"> 
                <input type="text" className={classNames(style.FormInput,'')} placeholder='Enter your number' />
        </label>
        <label class="block"> 
                <input type="text" className={classNames(style.FormInput,'')} placeholder='Enter your email' /> 
        </label>
        <label class="block">  
                <textarea class="mt-1 block w-full" rows="10" placeholder='Enter your email' className={classNames(style.FormTextarea,'')}></textarea>
        </label>
        <button className={classNames(style.FormBtn,'button light-green')}>Submit</button>
      </div>
    </div>
  )
}

export default LeadershipForm