/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the date picker component.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const DatePicker = (props) => {
  return(
    <div className='field is-horizontal'>
      <div className="label field-label">{props.label}</div>
      <div className='field-body'>
        <DayPickerInput onDayChange={props.handleChange}/>
      </div>
    </div>
  );
}

export default DatePicker;