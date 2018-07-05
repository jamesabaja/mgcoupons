/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/3/18   Created the navbar brand component.
 */

/*
 * File Creation Date: 7/3/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const NavbarBrand = ({onClick, brand}) => {
    return(
      <div className="navbar-brand">
        <a className='navbar-item' href='/'>
          {brand}
        </a>
        <a role="button" className="navbar-burger" aria-label="menu" style={{color: 'white'}}aria-expanded="false" onClick={onClick}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    );
}

export default NavbarBrand;