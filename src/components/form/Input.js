/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the text field input component.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const Input = (props) => {
  return(
    <div className="field is-horizontal">
      <label className="label field-label">{props.label}</label>
      <div className="field-body">
        <input id={props.id} className="input" type="text" onChange={props.handleChange}/>
      </div>
    </div>
  );
}

export default Input;