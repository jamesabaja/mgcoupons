/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the SKU Restrictions Form component
 *                               Changed the component from a const to class
 *                               Added functions and function descriptions
 * James Abaja          7/9/18   Changed props to context references.
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
import { Context } from '../AddCoupon';
import '../../../../assets/animate.css';
import IncludedItemsTable from '../tables/IncludedItemsTable';
import IncludedSKUsTable from '../tables/IncludedSKUsTable';
import ExcludedSKUsTable from '../tables/ExcludedSKUsTable';
import ExcludedItemsTable from '../tables/ExcludedItemsTable';


class SKURestrictionsForm extends Component {

  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.state = {
      includeTab: true,
      excludeTab: false,
      hideNotif: true,
      hideForm: true
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

  hideForm() {
    if(this.state.hideForm) {
      this.setState({
        hideForm: false
      });
    }else {
      this.setState({
        hideForm: true
      });
    }
  }

  render() {
    return(
      <Context.Consumer>
      {
        context => 
        <div>
          <div className={context.showIncludeExcludeError ? 'notification is-danger' : 'is-hidden'}>
            <button className="delete" id='showIncludeExcludeError' onClick={context.hideNotification}></button>
            Click <b><i>Include</i></b> or <b><i>Exclude</i></b> first before selecting/adding data.
          </div>
          <div className={context.itemAlreadyExists || context.skuAlreadyExists ? 'notification is-danger' : 'is-hidden'}>
            <button className="delete" id='itemAlreadyExists' onClick={context.hideNotification}></button>
            {context.itemAlreadyExists ? 'Item' : 'SKU Restriction'} <b><i>already exists</i></b> in the list.
          </div> 
          <div className={context.showIncludedNotification ? 'notification is-success' : 'is-hidden'}>
            <button className="delete" id='showIncludedNotification' onClick={context.hideNotification}></button>
            Successfully added <b><i>{context.includedItem ? context.includedItems[context.includedItems.length-1] : context.includedSKU ? context.multipleSKUs ? 'SKU restrictions' : context.includedSKUs[context.includedSKUs.length-1].category : ''}</i></b> to the Included list.
          </div>
          <div className={context.showExcludedNotification ? 'notification is-warning' : 'is-hidden'}>
            <button className="delete" id='showExcludedNotification' onClick={context.hideNotification}></button>
            Successfully added <b><i>{context.excludedItem ? context.excludedItems[context.excludedItems.length-1] : context.excludedSKU ? context.multipleSKUs ? 'SKU restrictions' : context.excludedSKUs[context.excludedSKUs.length-1].category : ''}</i></b> to the Excluded list.
          </div>
          <article className="message">
            <div className="message-header" onClick={this.hideForm}>
              <p>Add Restrictions</p>
              {this.state.hideForm ? <i className="material-icons">add_circle_outline</i> : <i className="material-icons">remove_circle_outline</i>}
            </div>
            <div className={this.state.hideForm ? 'message-body is-hidden' : 'message-body animated fadeIn'}>
              <div className='columns'>
                <div className='column'>
                  <RadioButton choices={context.skuChoices} name="skuChoices" onChange={context.includeOrExclude}/>
                  <Dropdown label='Category' options={context.categories} onClick={context.getCategoryFromDropdown}/>
                  <label className='label'>Classes</label>
                  <CheckBox id='branded' label='Branded' handleChange={context.checkBoxIsChecked}/>
                  <CheckBox id='generic' label='Generic' handleChange={context.checkBoxIsChecked}/>
                  <CheckBox id='unibranded' label='Unibranded' handleChange={context.checkBoxIsChecked}/>
                  <label className='label'>Restrictions</label>
                  <CheckBox id='rxOnly' label='Prescription' handleChange={context.checkBoxIsChecked}/>
                  <CheckBox id='otcOnly' label='OTC' handleChange={context.checkBoxIsChecked}/>
                  <div className="field is-horizontal">
                    <label className="label field-label"></label>
                    <div className="field-body">
                      <Button label='Add SKU' name='addSKU' handleClick={context.addSKU}/>
                    </div>
                  </div>
                </div>
                <div className="is-divider-vertical" data-content="OR"></div>
                <div className='column'>
                  <Search selectedItem={context.selectedItem}/>
                </div>
              </div>
            </div>
          </article>
          <div className='columns'>
            <div className='column'>
              <label className='label'>Included SKUs</label>
              <hr/>
              <div style={{overflowY: 'auto', height: '200px', display:'block'}}>
                <IncludedSKUsTable />
              </div>
              <label className='label'>Included Items</label>
              <hr/>
              <div style={{overflowY: 'auto', height: '200px', display:'block'}}>
                <IncludedItemsTable />
              </div>
            </div>
            <div className='column'>
              <label className='label'>Excluded SKUs</label>
              <hr/>
              <div style={{overflowY: 'auto', height: '200px', display:'block'}}>
                <ExcludedSKUsTable />
              </div>
              <label className='label'>Excluded Items</label>
              <hr/>
              <div style={{overflowY: 'auto', height: '200px', display:'block'}}>
                <ExcludedItemsTable />
              </div>
            </div>
          </div>
        </div>
      }
      </Context.Consumer>
    );
  }
  
}

export default SKURestrictionsForm;