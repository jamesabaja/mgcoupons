import React, { Component } from 'react';
import Panel from './Panel';
import axios from 'axios';

class Search extends Component {
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
        let value = item.indexAt !== -1;
        return value;
      });

      if(itemList.length > 0) {
        itemList = itemList.sort((a,b) => {
          if(a.indexAt - b.indexAt === 0) {
            if(a.title.length - b.title.length === 0) {
              if(b.formID - a.formID === 0) {
                return a.brand.localeCompare(b.brand);
              }
              return b.formID - a.formID;
            }
            return a.title.length - b.title.length;
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
          <Panel searchResults={this.state.searchResults} searchData={this.searchData} isLoading={this.state.loadingData}/>
        </div>
      </div>
    );
  }
}

export default Search;