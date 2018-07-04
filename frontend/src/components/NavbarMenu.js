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