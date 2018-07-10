/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the Transaction Restrictions Form component.
 * James Abaja          7/9/18   Changed props to context references.
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
import CheckBox from '../../../form/CheckBox';
import Input from '../../../form/Input';
import { Context } from '../AddCoupon';

const TransactionRestrictionsForm = () => {
  return(
    <Context.Consumer>
    {
      context => 
      <div>
        <Dropdown onClick={context.getTypeFromDropdown} label='Type' options={context.types}/>
        <div className={context.selectedType === 'Percent' ? 'field':' field is-hidden'}><Input label='Percent Off' id='percentOff' type='number' max='100' maxlength='3' min='0' handleChange={context.getData}/></div>
        <div className={context.selectedType === 'Fixed' ? 'field':'field is-hidden'}><Input label='Amount' min='0' id='amount' type='number' handleChange={context.getData}/></div>
        <div className='field'><Input label='Minimum Purchase' type='number' id='minPurchase' min='0' handleChange={context.getData}/></div>
        <div className={context.selectedType === 'Percent' ? 'field':'field is-hidden'}><Input label='Maximum Discount' min='0' id='maxAmount' type='number' handleChange={context.getData}/></div>
        <CheckBox id='onePromoPerTransaction' label='One promo per transaction' handleChange={context.checkBoxIsChecked}/>
      </div>
    }
    </Context.Consumer>
  );
}

export default TransactionRestrictionsForm;