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