/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the Basic Info Table component.
 * James Abaja          7/5/18   Renamed file name and exported component.
 * James Abaja          7/9/18   Changed props to context references.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';
import {Context} from '../AddCoupon';

const BasicInfoTable = (props) => {
  return(
    <Context.Consumer>
    {
      context => 
      <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
        <thead>
          <tr>
            <th>BASIC COUPON INFO</th>
            <th>Details</th>
          </tr>
        </thead>
          
          <tbody>
          {context.code !== '' && <tr>
            <th>Coupon Code</th>
            <td>{context.code}</td>
          </tr>}
          {context.description !== '' && <tr>
            <th>Description</th>
            <td>{context.description}</td>
          </tr>}
          <tr>
            <th>Activation Date</th>
            <td>{context.activeDate.toDateString()}</td>
          </tr>
          <tr>
            <th>Expiry Date</th>
            <td>{context.expiryDate.toDateString()}</td>
          </tr>
          <tr>
            <th>Waive Service and Delivery Fees?</th>
            <td>{context.waiveFees ? 'Yes' : 'No'}</td>
          </tr>
          {context.totalUseLimit !== 0 && <tr>
            <th>Total Use Limit</th>
            <td>{context.totalUseLimit}</td>
          </tr>}
          {context.dailyLimit !== 0 && <tr>
            <th>Daily Use Limit</th>
            <td>{context.dailyLimit}</td>
          </tr>}
          </tbody>
      </table>
    }
    </Context.Consumer>
  );
}

export default BasicInfoTable;