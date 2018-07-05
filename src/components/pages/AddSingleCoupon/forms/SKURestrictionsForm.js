/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the SKU Restrictions Form component.
 */

/*
 * File Creation Date: 7/5/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';
import CheckBox from '../../../form/CheckBox';
import Dropdown from '../../../form/Dropdown';
import RadioButton from '../../../form/RadioButton';
import Search from '../Search/Search';


const SKURestrictionsForm = (props) => {
  return(
    <div>
      <RadioButton choices={props.skuChoices} name="skuChoices"/>
      <Dropdown label='Category' options={props.categories}/>
      <Dropdown label='Class' options={props.classes}/>
      <CheckBox id='rxOnly' label='Prescription Medicine only' handleChange={props.checkBoxIsChecked}/>
      <Search endpointData={props.endpointData} />
    </div>
  );
}

export default SKURestrictionsForm;