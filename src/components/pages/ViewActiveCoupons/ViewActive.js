/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/3/18   Created the View Active Coupons component
 *                               Populated table with sample data
 * James Abaja          7/5/18   Renamed file locations of modules due to restructuring of project directory
 */

/*
 * File Creation Date: 7/3/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';
import '../../../assets/animate.css';

const ViewActive = () => {
  return(
    <div className='Module'>
      <h1 className='title is-size-4'>View Active Coupons</h1>
      <table className='table animated fadeIn fixed is-striped is-hoverable is-fullwidth is-text-centered'>
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Redemptions</th>
            <th>Expiry</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>COUPON 123</td>
            <td>'30% off on &hellip;'</td>
            <td>202/1000</td>
            <td>06/10/2018</td>
            <td><button className='button is-primary'>View Details</button></td>
          </tr>
          <tr>
            <td>COUPON 345</td>
            <td>'&#8369;200 off on &hellip;'</td>
            <td>48/50</td>
            <td>08/14/2018</td>
            <td><button className='button is-primary'>View Details</button></td>
          </tr>
          <tr>
            <td>COUPON 567</td>
            <td>'&#8369;100 off per &hellip;'</td>
            <td>0/1</td>
            <td>10/05/2018</td>
            <td><button className='button is-primary'>View Details</button></td>
          </tr>
          <tr>
            <td>COUPON 789</td>
            <td>'50% off on &hellip;'</td>
            <td>36/100</td>
            <td>06/02/2018</td>
            <td><button className='button is-primary'>View Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewActive;