/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the Transaction Restrictions Form component.
 */

/*
 * File Creation Date: 7/5/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';
import Dropdown from '../../../form/Dropdown';
import RadioButton from '../../../form/RadioButton';
import Input from '../../../form/Input';

const TransactionRestrictionsForm = (props) => {
  return(
    <div>
      <Dropdown onClick={props.getTypeFromDropdown} label='Type' options={props.types}/>
      <div className={props.selectedType === 'Percent' ? 'field':' field is-hidden'}><Input label='Percent Off' id='percentOff' handleChange={props.getData}/></div>
      <div className={props.selectedType === 'Fixed' ? 'field':'field is-hidden'}><Input label='Amount' id='amount' handleChange={props.getData}/></div>
      <div className='field'><Input label='Minimum Purchase' id='minPurchase' handleChange={props.getData}/></div>
      <div className={props.selectedType === 'Percent' ? 'field':'field is-hidden'}><Input label='Maximum Discount' id='maxAmount' handleChange={props.getData}/></div>
      <RadioButton choices={props.otherPromos} name="otherPromos"/>
    </div>
  );
}

export default TransactionRestrictionsForm;