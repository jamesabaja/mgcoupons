/*
 *  MGCoupons
 *  Coupon Management System
 *  http://mgcoupons.herokuapp.com
 *  James Gabriel Abaja
 *  Intern
 *  IT Team
 */

/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/3/18   Created the main index component, and added a BrowserRouter component for the App component.
 */

/*
 * File Creation Date: 7/3/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
