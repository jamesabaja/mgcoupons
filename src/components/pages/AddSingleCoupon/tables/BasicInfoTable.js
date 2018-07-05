/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the Basic Info Table component.
 * James Abaja          7/5/18   Renamed file name and exported component.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const BasicInfoTable = (props) => {
  return(
    <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
      <thead>
        <tr>
          <th>BASIC COUPON INFO</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {props.code !== '' && <tr>
          <th>Coupon Code</th>
          <td>{props.code}</td>
        </tr>}
        {props.description !== '' && <tr>
          <th>Description</th>
          <td>{props.description}</td>
        </tr>}
        <tr>
          <th>Activation Date</th>
          <td>{props.activeDate.toDateString()}</td>
        </tr>
        <tr>
          <th>Expiry Date</th>
          <td>{props.expiryDate.toDateString()}</td>
        </tr>
        <tr>
          <th>Waive Service and Delivery Fees?</th>
          <td>{props.waiveFees ? 'Yes' : 'No'}</td>
        </tr>
        {props.totalUseLimit !== '' && <tr>
          <th>Total Use Limit</th>
          <td>{props.totalUseLimit}</td>
        </tr>}
        {props.dailyLimit !== '' && <tr>
          <th>Daily Use Limit</th>
          <td>{props.dailyLimit}</td>
        </tr>}
      </tbody>
    </table>
  );
}

export default BasicInfoTable;