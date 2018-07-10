/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the User Restrictions Form component.
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
import CheckBox from '../../../form/CheckBox';
import { Context } from '../AddCoupon';

const UserRestrictionsForm = () => {
  return(
    <Context.Consumer>
    {
      context =>
      <div>
        <label className='label'>Locations</label>
        <div className='columns'>
          <div className='column'>
            <CheckBox id='Caloocan' label='Caloocan' handleChange={context.getLocation}/>
            <CheckBox id='Las Pinas' label='Las Pinas' handleChange={context.getLocation}/>
            <CheckBox id='Makati' label='Makati' handleChange={context.getLocation}/>
            <CheckBox id='Malabon' label='Malabon' handleChange={context.getLocation}/>
            <CheckBox id='Mandaluyong' label='Mandaluyong' handleChange={context.getLocation}/>
            <CheckBox id='Manila' label='Manila' handleChange={context.getLocation}/>
          </div>
          <div className='column'>
            <CheckBox id='Marikina' label='Marikina' handleChange={context.getLocation}/>
            <CheckBox id='Muntinlupa' label='Muntinlupa' handleChange={context.getLocation}/>
            <CheckBox id='Navotas' label='Navotas' handleChange={context.getLocation}/>
            <CheckBox id='Paranaque' label='Paranaque' handleChange={context.getLocation}/>
            <CheckBox id='Pasay' label='Pasay' handleChange={context.getLocation}/>
            <CheckBox id='Pasig' label='Pasig' handleChange={context.getLocation}/>
          </div>
          <div className='column'>
            <CheckBox id='Pateros' label='Pateros' handleChange={context.getLocation}/>
            <CheckBox id='Quezon City' label='Quezon City' handleChange={context.getLocation}/>
            <CheckBox id='San Juan' label='San Juan' handleChange={context.getLocation}/>
            <CheckBox id='Taguig' label='Taguig' handleChange={context.getLocation}/>
            <CheckBox id='Valenzuela' label='Valenzuela' handleChange={context.getLocation}/>
            <CheckBox id='Provincial' label='Provincial' handleChange={context.getLocation}/>
          </div>
        </div>

        <Input label='Company' id='company' handleChange={context.getData}/>
        <Input label='Uses per User' id='userUseLimit' type='number' handleChange={context.getData} disabled={context.firstTime} min='1' />
        <CheckBox id='firstTime' label='First-time users' handleChange={context.checkBoxIsChecked}/>
      </div>
    }
    </Context.Consumer>
  );
}

export default UserRestrictionsForm;