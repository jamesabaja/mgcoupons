/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/3/18   Created the main App component, and added routes to View and Add Coupons.
 * James Abaja          7/4/18   Added routes to a landing page and Batch Upload Coupons.
 */

/*
 * File Creation Date: 7/3/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React, { Component } from 'react';
import '../assets/App.css';
import Navbar from '../components/navbar/Navbar';
import { Route } from 'react-router-dom';
import {AddCoupon} from '../components/pages/AddSingleCoupon/AddCoupon';
import ViewActive from '../components/pages/ViewActiveCoupons/ViewActive';
import ViewInactive from '../components/pages/ViewInactiveCoupons/ViewInactive';
import LandingPage from '../components/pages/LandingPage/LandingPage';
import BatchUpload from '../components/pages/BatchUploadCoupons/BatchUpload';

class App extends Component {
  render() {
    return (
      <div className="App is-block-mobile">
        <Navbar />
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/add' component={AddCoupon}/>
        <Route exact path='/add/batch' component={BatchUpload}/>
        <Route exact path='/view/active' component={ViewActive}/>
        <Route exact path='/view/deactivated' component={ViewInactive}/>
        {/*<Route path="*" component={NotFound} />*/}
      </div>
    );
  }
}

export default App;
