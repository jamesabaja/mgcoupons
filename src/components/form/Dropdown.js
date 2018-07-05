/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the dropdown menu component.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const Dropdown = (props) => {
  return(
    <div className="field is-horizontal">
      <label className="label field-label">{props.label}</label>
      <div className="field-body">
        <div className="control">
          <div className="select is-primary">
            <select onClick={props.onClick !== undefined ? props.onClick : null}>
              {props.options.map((val, i) => <option key={i}>{val}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;