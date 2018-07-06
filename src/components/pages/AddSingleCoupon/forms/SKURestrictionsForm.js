/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the SKU Restrictions Form component
 *                               Changed the component from a const to class
 *                               Added functions and function descriptions
 */

/*
 * File Creation Date: 7/5/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React, { Component } from 'react';
import CheckBox from '../../../form/CheckBox';
import Dropdown from '../../../form/Dropdown';
import RadioButton from '../../../form/RadioButton';
import Search from '../Search/Search';
import Button from '../../../form/Button';


class SKURestrictionsForm extends Component {

  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      includedItems: [],
      include: false,
      excludedItems: [],
      exclude: false,
      includeTab: true,
      excludeTab: false
    };
  }

  selectTab(e) {
    let selectedTab = e.target.name;
    if(selectedTab === 'Include') {
      this.setState({
        includeTab: true,
        excludeTab: false
      });
    }else {
      this.setState({
        excludeTab: true,
        includeTab: false
      });
    }
  }

  render() {
    return(
      <div className='columns'>
        <div className='column'>
          <RadioButton choices={this.props.skuChoices} name="skuChoices" onChange={this.props.includeOrExclude}/>
          <Dropdown label='Category' options={this.props.categories} onClick={this.props.getCategoryFromDropdown}/>
          <Dropdown label='Class' options={this.props.classes} onClick={this.props.getClassFromDropdown}/>
          <CheckBox id='rxOnly' label='Prescription Medicine only' handleChange={this.props.checkBoxIsChecked}/>
          <Search selectedItem={this.props.selectedItem}/>
        </div>
        <div className='column'>
          <div className="tabs is-toggle is-boxed">
            <ul>
              <li className={this.state.includeTab ? 'is-active':''}><a onClick={this.selectTab} name='Include'>Included Items</a></li>
              <li  className={this.state.excludeTab ? 'is-active':''}><a onClick={this.selectTab} name='Exclude'>Excluded Items</a></li>
            </ul>
            <button className='button is-primary' onClick={this.props.clearList} name='Clear List'>Clear List</button>
          </div>
          {this.state.includeTab && 
          <div style={{overflowY: 'auto', height: '500px', display:'block'}}>
          <table className='table is-striped is-hoverable is-fullwidth has-text-centered'>
            <thead>
              <tr>
                <th>CATEGORIES</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              {this.props.includedCategories.sort((a, b) => {
                return a.localeCompare(b);
              })
              .map((item, i) =>
              <tr>
                <td key={i} style={{width: '75%'}}>{item}</td>
                <td style={{width: '25%'}}><Button label='Remove' handleClick={this.props.removeFromList} name={item}/></td>
              </tr>)}
            </tbody>
          </table>
          <table className='table is-striped is-hoverable is-fullwidth has-text-centered'>
            <thead>
              <tr>
                <th>CLASSES</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              {this.props.includedClasses.sort((a, b) => {
                return a.localeCompare(b);
              }).map((item, i) =>
              <tr>
                <td key={i} style={{width: '75%'}}>{item}</td>
                <td style={{width: '25%'}}><Button label='Remove' handleClick={this.props.removeFromList} name={item}/></td>
              </tr>)}
            </tbody>
          </table>
          <table className='table is-striped is-hoverable is-fullwidth has-text-centered'>
            <thead>
              <tr>
                <th>ITEMS</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              {this.props.includedItems.sort((a, b) => {
                return a.localeCompare(b);
              }).map((item, i) =>
              <tr>
                <td key={i} style={{width: '75%'}}>{item}</td>
                <td style={{width: '25%'}}><Button label='Remove' handleClick={this.props.removeFromList} name={item}/></td>
              </tr>)}
            </tbody>
          </table>
          </div>}
          {this.state.excludeTab && 
          <div style={{overflowY: 'auto', height: '500px', display:'block'}}>
            <table className='table is-striped is-hoverable is-fullwidth has-text-centered'>
              <thead>
                <tr>
                  <th>CATEGORIES</th>
                  <th/>
                </tr>
              </thead>
              <tbody>
                {this.props.excludedCategories.sort((a, b) => {
                return a.localeCompare(b);
              }).map((item, i) =>
                <tr>
                  <td key={i} style={{width: '75%'}}>{item}</td>
                  <td style={{width: '25%'}}><Button label='Remove' handleClick={this.props.removeFromList} name={item}/></td>
                </tr>)}
              </tbody>
            </table>
            <table className='table is-striped is-hoverable is-fullwidth has-text-centered'>
              <thead>
                <tr>
                  <th>CLASSES</th>
                  <th/>
                </tr>
              </thead>
              <tbody>
                {this.props.excludedClasses.sort((a, b) => {
                return a.localeCompare(b);
              }).map((item, i) =>
                <tr>
                  <td key={i} style={{width: '75%'}}>{item}</td>
                  <td style={{width: '25%'}}><Button label='Remove' handleClick={this.props.removeFromList} name={item}/></td>
                </tr>)}
              </tbody>
            </table>
            <table className='table is-striped is-hoverable is-fullwidth has-text-centered'>
              <thead>
                <tr>
                  <th>ITEMS</th>
                  <th/>
                </tr>
              </thead>
              <tbody>
                {this.props.excludedItems.sort((a, b) => {
                return a.localeCompare(b);
              }).map((item, i) =>
                <tr>
                  <td key={i} style={{width: '75%'}}>{item}</td>
                  <td style={{width: '25%'}}><Button label='Remove' handleClick={this.props.removeFromList} name={item}/></td>
                </tr>)}
              </tbody>
            </table>
          </div>}
        </div>
      </div>
    );
  }
  
}

export default SKURestrictionsForm;