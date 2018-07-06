/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the radio button component.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const RadioButton = (props) => {
  return(
    <div className="field is-horizontal">
      <div className="field-label">{props.label}</div>
      <div className="field-body">
        <div className="control">
          {props.choices.map((val, i) => 
            <label className="radio" key={i}>
              <input type="radio" name={props.name} key={i} value={val} onChange={props.onChange}/>
              &nbsp;{val}
            </label>
          )}
        </div>
      </div>
    </div>
  );
}

export default RadioButton;