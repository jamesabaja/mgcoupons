/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the button component.
 */

/*
 * File Creation Date: 7/5/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const Button = (props) => {
  return(
    <button className="button is-primary" onClick={props.handleClick} name={props.name}>
      {props.label}
    </button>
  );
}

export default Button;