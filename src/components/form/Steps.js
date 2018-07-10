/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the steps component.
 * James Abaja          7/9/18   Changed props to context references.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';
import { Context } from '../pages/AddSingleCoupon/AddCoupon';

const Steps = (props) => {
  return(
    <Context.Consumer>
    {
      context => 
      <ul className="steps has-content-centered">
        <li className={ context.activeStep === 1 ?  "steps-segment is-active" : 'steps-segment' }>
          <div className="steps-marker" id='1' onClick={context.setActiveStep}>
          <i className="material-icons">description</i>
          </div>
          <div id='1' className="steps-content" onClick={context.setActiveStep}>
            <p>Basic Coupon Information</p>
          </div>
        </li>
        <li className={ context.activeStep === 2 ?  "steps-segment is-active" : 'steps-segment' }>
          <div className="steps-marker" id='2' onClick={context.setActiveStep}>
          <i className="material-icons">people</i>
          </div>
          <div className="steps-content" id='2' onClick={context.setActiveStep}>
            <p>User Restrictions</p>
          </div>
        </li>
        <li className={ context.activeStep === 3 ?  "steps-segment is-active" : 'steps-segment' }>
          <div className="steps-marker" id='3' onClick={context.setActiveStep}>
          <i className="material-icons">local_pharmacy</i>
          </div>
          <div className="steps-content" id='3' onClick={context.setActiveStep}>
            <p>SKU Restrictions</p>
          </div>
        </li>
        <li className={ context.activeStep === 4 ?  "steps-segment is-active" : 'steps-segment' }>
          <div className="steps-marker" id='4' onClick={context.setActiveStep}>
          <i className="material-icons">money_off</i>
          </div>
          <div className="steps-content" id='4' onClick={context.setActiveStep}>
            <p>Transaction Restrictions</p>
          </div>
        </li>
        <li className={ context.activeStep === 5 ?  "steps-segment is-active" : 'steps-segment' }>
          <div className="steps-marker" id="5" onClick={context.setActiveStep}>
          <i className="material-icons">done_all</i>
          </div>
          <div className="steps-content" id="5" onClick={context.setActiveStep}>
            <p>Review Data / Submit</p>
          </div>
        </li>
      </ul>
    }
    </Context.Consumer>
  );
}

export default Steps;