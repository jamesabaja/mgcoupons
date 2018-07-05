/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the Review Data Form component.
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

const ReviewDataForm = (props) => {
  return(
    <div>
      <BasicInfoTable code={props.state.code} description={props.state.description} activeDate={props.state.activeDate} expiryDate={props.state.expiryDate} waiveFees={props.state.waiveFees} totalUseLimit={props.state.totalUseLimit} dailyLimit={props.state.dailyLimit} />
      <UserRestrictionsTable location={props.state.location} company={props.state.company} userUseLimit={props.state.userUseLimit} firstTime={props.state.firstTime} />
      <SKURestrictionsTable item={props.state.item} rxOnly={props.state.rxOnly} />
      <TransactionRestrictionsTable selectedType={props.state.selectedType} percentOff={props.state.percentOff} amount={props.state.amount} minPurchase={props.state.minPurchase} maxAmount={props.state.maxAmount} />
    </div>
  );
}

export default ReviewDataForm;