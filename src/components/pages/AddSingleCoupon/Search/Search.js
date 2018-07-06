/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/5/18   Created the Search component 
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
import Panel from './Panel';
import axios from 'axios';

class Search extends Component {

  /*
   * Function: constructor
   * Parameters: props
   * Description: Constructor function of the class, containing the initialization of the state variables and the binding of the functions inside the class. 
   */
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.searchData = this.searchData.bind(this);
    this.getForm = this.getForm.bind(this);
    this.state = {
      endpointData: [],
      searchResults: [],
      loadingData: false
    };
  }

  /*
   * Function: getForm
   * Parameters: item (OBJECT)
   * Description: Function that takes in an object and checks whether its 'title' attribute contains a 'Form' and sets a formID for that object for sorting purposes.  
   */
  getForm(item) {
    if(item.title.indexOf(' Tablet ') !== -1) {
      item.formID = 7;
    }else if(item.title.indexOf(' Capsule ') !== -1) {
      item.formID = 6;
    }else if(item.title.indexOf(' Syrup ') !== -1) {
      item.formID = 5;
    }else if(item.title.indexOf(' Suspension ') !== -1) {
      item.formID = 4;
    }else if(item.title.indexOf(' Drops ') !== -1) {
      item.formID = 3;
    }else if(item.title.indexOf(' Gel ') !== -1) {
      item.formID = 2;
    }else if(item.title.indexOf(' Lotion ') !== -1) {
      item.formID = 1;
    }else {
      item.formID = 0
    }

    return item;
  }

  /*
   * Function: searchData
   * Parameters: event (EVENT) 
   * Description: Searches through the given data and sorts the search results and returns the top 100 results.
   */
  searchData(event) {
    let input = event.target.value;
    if(input.length === 0) {
      this.setState({
        searchResults: []
      });
    }else {
      let itemList = this.state.endpointData;
      input = input.toLowerCase();
      itemList = itemList.filter((item) => {
        item.indexAt = item.title.toLowerCase().indexOf(input);
        item = this.getForm(item);
        item.wordCount = item.title.split(' ').length - item.brand.split(' ').length;
        let value = item.indexAt !== -1;
        return value;
      });

      if(itemList.length > 0) {
        itemList = itemList.sort((a,b) => {
          if(a.indexAt - b.indexAt === 0) {
            if(a.wordCount - b.wordCount === 0) {
              if(a.title.localeCompare(b.title) === 0) {
                if(b.formID - a.formID === 0) {
                  return a.brand.localeCompare(b.brand);
                }
                return b.formID - a.formID;
              }
              return a.title.localeCompare(b.title);
            }
            return a.wordCount - b.wordCount;
          }
          return a.indexAt - b.indexAt;
        });
        let results = 0;
        itemList = itemList.filter((item) => {
          if(results === 100) {
            return false;
          }
          results++;
          return item;
        });
        this.setState({
          searchResults: itemList
        });
      }else {
        this.setState({
          searchResults: []
        });
      }
    }
  }

  /*
   * Function: loadData
   * Parameters: none
   * Description: Gets the data from the props 
   */
  loadData() {
    this.setState({
      endpointData: this.props.endpointData
    });
  }

  componentWillMount() {
    this.setState({
      loadingData: true
    });
    //this.loadData();
    axios.get('http://musical-happiness.herokuapp.com/product/?format=json').then(response => { 
      this.setState({endpointData: response.data, loadingData: false});
    });
  }

  render() {
    return(
      <div className="field is-horizontal">
        <label className="label field-label">Search Item/Brand</label>
        <div className="field-body">
          <Panel searchResults={this.state.searchResults} searchData={this.searchData} isLoading={this.state.loadingData} selectedItem={this.props.selectedItem}/>
        </div>
      </div>
    );
  }
}

export default Search;