/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the SKU Restrictions Table component.
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

const SKURestrictionsTable = (props) => {
  return(
    <Context.Consumer>
    {
      context =>
      <div>
        <label className='label'>SKU RESTRICTIONS (Included SKUs and Items)</label>
        <div style={{overflowY: 'auto', height: '200px', display:'block'}}>
        <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
          <tbody>
            {context.includedSKUs.map((item, i) =>
            <tr key={i}>
              <td>SKU</td>
              <td key={i}><p><b>Category: </b>{item.category}</p><p><b>Class/es: </b>{item.classList.join(', ')}</p><p><b>Restrictions: </b>{item.rxOnly && item.otcOnly ? 'Prescription/OTC' : item.rxOnly ? 'Prescription' : item.otcOnly ? 'OTC' : 'None'}</p></td>
            </tr>)}
            {context.includedItems.map((item, i) =>
            <tr key={i}>
              <td>Item</td>
              <td key={i}>{item}</td>
            </tr>)}
          </tbody>
        </table>
        </div>
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}/>
        <label className='label'>SKU RESTRICTIONS (Excluded SKUs and Items)</label>
        <div style={{overflowY: 'auto', height: '200px', display:'block'}}>
        <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
        <tbody>
          {context.excludedSKUs.map((item, i) =>
          <tr key={i}>
            <td>SKU</td>
            <td key={i}><p><b>Category: </b>{item.category}</p><p><b>Class/es: </b>{item.classList.join(', ')}</p><p><b>Restrictions: </b>{item.rxOnly && item.otcOnly ? 'Prescription/OTC' : item.rxOnly ? 'Prescription' : item.otcOnly ? 'OTC' : 'None'}</p></td>
          </tr>)}
          {context.excludedItems.map((item, i) =>
          <tr key={i}>
            <td>Item</td>
            <td key={i}>{item}</td>
          </tr>)}
        </tbody>
      </table>
      </div>
    </div>
    }
    </Context.Consumer>
  );
}

export default SKURestrictionsTable;