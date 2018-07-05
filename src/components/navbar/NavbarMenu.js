/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/3/18   Created the navbar menu component.
 */

/*
 * File Creation Date: 7/3/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const NavbarMenu = (props) => {
  return(
    <div className={props.isActive ? 'navbar-menu is-active':'navbar-menu'}>
      <div className='navbar-end'>
        <div className='navbar-item has-dropdown is-hoverable'>
          <a className='navbar-link'>
            VIEW
          </a>
          <div className='navbar-dropdown is-right'>
            <a className='navbar-item' href='/view/active'>
              Active Coupons
            </a>
            <hr className="navbar-divider"/>
            <a className='navbar-item' href='/view/deactivated'>
              Deactivated Coupons
            </a>
          </div>
        </div>
        <div className='navbar-item has-dropdown is-hoverable'>
          <a className='navbar-link'>
            ADD
          </a>
          <div className='navbar-dropdown is-right'>
            <a className='navbar-item' href='/add'>
              Single Coupon
            </a>
            <hr className="navbar-divider"/>
            <a className='navbar-item' href='/add/batch'>
              Batch Upload
            </a>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default NavbarMenu;