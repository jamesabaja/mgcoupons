/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the User Restrictions Form component.
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
import CheckBox from '../../../form/CheckBox';

const UserRestrictionsForm = (props) => {
  return(
    <div>
      <Input label='Location/s' id='location' handleChange={props.getData}/>
      <Input label='Company' id='company' handleChange={props.getData}/>
      <Input label='Uses per User' id='userUseLimit' handleChange={props.getData}/>
      <CheckBox id='firstTime' label='First-time users' handleChange={props.checkBoxIsChecked}/>
    </div>
  );
}

export default UserRestrictionsForm;