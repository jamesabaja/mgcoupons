/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the Transaction Restrictions Table component.
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
import { Context } from '../AddCoupon';

const TransactionRestrictionsTable = (props) => {
  return(
    <Context.Consumer>
    {
      context =>
      <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
        <thead>
          <tr>
            <th>TRANSACTION RESTRICTIONS</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {context.selectedType !== '' && <tr>
            <th>Type</th>
            <td>{context.selectedType}</td>
          </tr>}
          {context.selectedType !== 'Fixed' && context.percentOff !== 0 &&
          <tr>
            <th>Percent Off</th>
            <td>{context.percentOff}</td>
          </tr>}
          {context.selectedType !== 'Percent' && context.amount !== 0 && 
          <tr>
            <th>Amount</th>
            <td>{context.amount}</td>
          </tr>}
          {context.minPurchase !== 0 && <tr>
            <th>Minimum Purchase</th>
            <td>{context.minPurchase}</td>
          </tr>}
          {context.selectedType !== 'Fixed' && context.maxAmount !== 0 &&
          <tr>
            <th>Maximum Amount</th>
            <td>{context.maxAmount}</td>
          </tr>}
          <tr>
            <th>One Promo Per Transaction?</th>
            <td>{context.onePromoPerTransaction ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    }
    </Context.Consumer>
  );
}

export default TransactionRestrictionsTable;