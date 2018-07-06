/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the Panel component
 */

/*
 * File Creation Date: 7/5/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const Panel = (props) => {
  return(
    <nav className='panel' style={{width: '100%'}}>
      <div className='panel-block'>
        <p className="control has-icons-left">
          <input className="input is-primary" type="text" placeholder="search" onChange={props.searchData}/>
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      {props.isLoading && <p className='has-text-centered subtitle is-5' style={{paddingTop: '10px'}}>Loading data...</p>}
      <div style={{overflowY: 'auto', height: '391px'}}>
      {props.searchResults.map((item, i) => 
        <a className='panel-block' key={i} onClick={props.selectedItem} name={item.title}>{item.title}</a>
      )}
      </div>
    </nav>
  );
}

export default Panel;