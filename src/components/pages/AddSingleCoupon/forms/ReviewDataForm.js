/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the Review Data Form component.
 * James Abaja          7/9/18   Removed passing of props because of AddCoupon Context.
 */

/*
 * File Creation Date: 7/5/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';
import BasicInfoTable from '../tables/BasicInfoTable';
import UserRestrictionsTable from '../tables/UserRestrictionsTable';
import SKURestrictionsTable from '../tables/SKURestrictionsTable';
import TransactionRestrictionsTable from '../tables/TransactionRestrictionsTable';

const ReviewDataForm = () => {
  return(
    <div>
      <BasicInfoTable />
      <UserRestrictionsTable />
      <TransactionRestrictionsTable />
      <SKURestrictionsTable />
    </div>
  );
}

export default ReviewDataForm;