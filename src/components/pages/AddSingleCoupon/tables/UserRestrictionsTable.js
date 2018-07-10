/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the User Restrictions Table component.
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

const UserRestrictionsTable = (props) => {
  return(
    <Context.Consumer>
    {
      context =>
      <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
        <thead>
          <tr>
            <th>USER RESTRICTIONS</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {context.locations !== [] && <tr>
            <th>Location/s</th>
            <td>{context.locations.join(', ')}</td>
          </tr>}
          {context.company !== '' && <tr>
            <th>Company</th>
            <td>{context.company}</td>
          </tr>}
          {context.userUseLimit !== 0 && <tr>
            <th>Uses per User</th>
            <td>{context.userUseLimit}</td>
          </tr>}
          <tr>
            <th>First-time users only?</th>
            <td>{context.firstTime ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </table>
    }
    </Context.Consumer>
  );
}

export default UserRestrictionsTable;