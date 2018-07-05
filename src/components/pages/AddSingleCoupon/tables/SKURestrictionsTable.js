/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the SKU Restrictions Table component.
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

const SKURestrictionsTable = (props) => {
  return(
    <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
      <thead>
        <tr>
          <th>SKU RESTRICTIONS</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {props.item !== '' && <tr>
          <th>Item</th>
          <td>{props.item}</td>
        </tr>}
        <tr>
          <th>Prescription Medicine only?</th>
          <td>{props.rxOnly ? 'Yes' : 'No'}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SKURestrictionsTable;