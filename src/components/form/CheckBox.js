/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the checkbox component.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const CheckBox = (props) => {
  return(
    <div className='field is-horizontal'>
      <div className="field-label"></div>
      <div className='field-body'>
        <label className="checkbox">
          <input type="checkbox" id={props.id} onChange={props.handleChange}/>
          &nbsp;{props.label}
        </label>
      </div>
    </div>
  ); 
}

export default CheckBox;