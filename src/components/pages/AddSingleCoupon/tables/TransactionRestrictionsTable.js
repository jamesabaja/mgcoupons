/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the Transaction Restrictions Table component.
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

const TransactionRestrictionsTable = (props) => {
  return(
    <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
      <thead>
        <tr>
          <th>TRANSACTION RESTRICTIONS</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {props.selectedType !== '' && <tr>
          <th>Type</th>
          <td>{props.selectedType}</td>
        </tr>}
        {props.selectedType !== 'Fixed' && props.percentOff !== '' &&
        <tr>
          <th>Percent Off</th>
          <td>{props.percentOff}</td>
        </tr>}
        {props.selectedType !== 'Percent' && props.amount !== '' && 
        <tr>
          <th>Amount</th>
          <td>{props.amount}</td>
        </tr>}
        {props.minPurchase !== '' && <tr>
          <th>Minimum Purchase</th>
          <td>{props.minPurchase}</td>
        </tr>}
        {props.selectedType !== 'Fixed' && props.maxAmount !== '' &&
        <tr>
          <th>Maximum Amount</th>
          <td>{props.maxAmount}</td>
        </tr>}
      </tbody>
    </table>
  );
}

export default TransactionRestrictionsTable;