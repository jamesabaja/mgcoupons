/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the Basic Info Form component.
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
import Input from '../../../form/Input';
import DatePicker from '../../../form/DatePicker';
import TextArea from '../../../form/TextArea';
import CheckBox from '../../../form/CheckBox';
import { Context } from '../AddCoupon';

const BasicInfoForm = () => {
  return(
    <Context.Consumer>
    {
      context =>
      <div>
        <Input label='Coupon Code' id='code' type='text' handleChange={context.getData}/>
        <TextArea label='Description' id='description' handleChange={context.getData}/>
        <DatePicker label='Activation Date' id='activeDate' handleChange={context.getActivationDate}/>
        <DatePicker label='Expiration Date' id='expiryDate' handleChange={context.getExpirationDate}/>
        <CheckBox id='waiveFees' label='Waive Service and Delivery Fees' handleChange={context.checkBoxIsChecked}/>
        <Input label='Total Use Limit' id='totalUseLimit' type='number' min='0' handleChange={context.getData}/>
        <Input label='Uses per Day' id='dailyLimit' type='number' min='0' handleChange={context.getData}/>
      </div>
    }
    </Context.Consumer>
  );
}

export {BasicInfoForm};
