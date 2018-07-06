/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the steps component.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const Steps = (props) => {
  return(
    <ul className="steps has-content-centered">
      <li className={ props.isActive === 1 ?  "steps-segment is-active" : 'steps-segment' }>
        <div className="steps-marker" id='1' onClick={props.handleClick}>
        <i className="material-icons">description</i>
        </div>
        <div id='1' className="steps-content" onClick={props.handleClick}>
          <p>Basic Coupon Information</p>
        </div>
      </li>
      <li className={ props.isActive === 2 ?  "steps-segment is-active" : 'steps-segment' }>
        <div className="steps-marker" id='2' onClick={props.handleClick}>
        <i className="material-icons">people</i>
        </div>
        <div className="steps-content" id='2' onClick={props.handleClick}>
          <p>User Restrictions</p>
        </div>
      </li>
      <li className={ props.isActive === 3 ?  "steps-segment is-active" : 'steps-segment' }>
        <div className="steps-marker" id='3' onClick={props.handleClick}>
        <i className="material-icons">local_pharmacy</i>
        </div>
        <div className="steps-content" id='3' onClick={props.handleClick}>
          <p>SKU Restrictions</p>
        </div>
      </li>
      <li className={ props.isActive === 4 ?  "steps-segment is-active" : 'steps-segment' }>
        <div className="steps-marker" id='4' onClick={props.handleClick}>
        <i className="material-icons">money_off</i>
        </div>
        <div className="steps-content" id='4' onClick={props.handleClick}>
          <p>Transaction Restrictions</p>
        </div>
      </li>
      <li className={ props.isActive === 5 ?  "steps-segment is-active" : 'steps-segment' }>
        <div className="steps-marker" id="5" onClick={props.handleClick}>
        <i className="material-icons">done_all</i>
        </div>
        <div className="steps-content" id="5" onClick={props.handleClick}>
          <p>Review Data / Submit</p>
        </div>
      </li>
    </ul>
  );
}

export default Steps;