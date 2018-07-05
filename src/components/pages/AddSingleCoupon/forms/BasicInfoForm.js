/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the Basic Info Form component.
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

const BasicInfoForm = (props) => {
  return(
    <div>
      <Input label='Coupon Code' id='code' handleChange={props.getData}/>
      <TextArea label='Description' id='description' handleChange={props.getData}/>
      <DatePicker label='Activation Date' id='activeDate' handleChange={props.getActivationDate}/>
      <DatePicker label='Expiration Date' id='expiryDate' handleChange={props.getExpirationDate}/>
      <CheckBox id='waiveFees' label='Waive Service and Delivery Fees' handleChange={props.checkBoxIsChecked}/>
      <Input label='Total Use Limit' id='totalUseLimit' handleChange={props.getData}/>
      <Input label='Uses per Day' id='dailyLimit' handleChange={props.getData}/>
    </div>
  );
}

export default BasicInfoForm;
