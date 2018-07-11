/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/3/18   Created the Add Coupon component
 *                               Added the moveForward and moveBackward functions
 * James Abaja          7/4/18   Added more form details
 *                               Reorganized components
 *                               Added functions to geet the data from the form elements
 *                               Summarized form details at the end of the form
 * James Abaja          7/5/18   Renamed tables 
 *                               Added function descriptions
 *                               Renamed file locations of modules due to restructuring of project directory
 */

/*
 * File Creation Date: 7/3/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React, { Component } from 'react';
import 'react-day-picker/lib/style.css';
import '../../../assets/animate.css';
import Steps from '../../form/Steps';
import Button from '../../form/Button';
import {BasicInfoForm} from './forms/BasicInfoForm';
import UserRestrictionsForm from './forms/UserRestrictionsForm';
import SKURestrictionsForm from './forms/SKURestrictionsForm';
import TransactionRestrictionsForm from './forms/TransactionRestrictionsForm';
import ReviewDataForm from './forms/ReviewDataForm';
import axios from 'axios';

const Context = React.createContext();

class AddCoupon extends Component {

  /*
   * Function: constructor
   * Parameters: props
   * Description: Constructor function of the class, containing the initialization of the state variables and the binding of the functions inside the class. 
   */
  constructor(props) {
    super(props);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    this.getTypeFromDropdown = this.getTypeFromDropdown.bind(this);
    this.getData = this.getData.bind(this);
    this.getActivationDate = this.getActivationDate.bind(this);
    this.getExpirationDate = this.getExpirationDate.bind(this);
    this.setActiveStep = this.setActiveStep.bind(this);
    this.checkBoxIsChecked = this.checkBoxIsChecked.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.selectedItem = this.selectedItem.bind(this);
    this.includeOrExclude = this.includeOrExclude.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.getCategoryFromDropdown = this.getCategoryFromDropdown.bind(this);
    this.clearList = this.clearList.bind(this);
    this.addSKU = this.addSKU.bind(this);
    this.removeFromSKUs = this.removeFromSKUs.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.submitData = this.submitData.bind(this);
    this.hideNotification = this.hideNotification.bind(this);
    const types = ['Percent', 'Fixed', 'Other'];
    const categories = ['All', 'Bone and Joint', 'Cough and Colds', 'Diabetes', 'Endocrine', 'Eye and Ear', 'Hypertension', 'Infection', 'Kits and First Aid', 'Mental Health', 'Pain and Fever', 'Urinary and Reproductive Health', 'Respiratory Health', 'Stomach Care', 'Vitamins, Minerals, and Supplements', 'Dermatologic', 'Cardiovascular', 'Blood Drugs', 'Cancer', 'Electrolytes', 'Oral Care']
    this.state = {
      skuAlreadyExists: false,
      itemAlreadyExists: false,
      showIncludedNotification: false,
      showExcludedNotification: false,
      showIncludeExcludeError: false,
      multipleSKUs: false,
      includedItem: false,
      includedSKU: false,
      excludedItem: false,
      excludedSKU: false,
      activeStep: 1,
      selectedType: types[0],
      code: '',
      totalUseLimit: 0,
      dailyLimit: 0,
      location: '',
      company: '',
      userUseLimit: 0,
      item: '',
      percentOff: 0,
      amount: 0,
      minPurchase: 0,
      maxAmount: 0,
      description: '',
      activeDate: new Date(),
      expiryDate: new Date(),
      firstTime: false,
      rxOnly: false,
      waiveFees: false,
      endpointData: [],
      includedItems: [],
      include: false,
      excludedItems: [],
      exclude: false,
      branded: false,
      generic: false,
      unibranded: false,
      otcOnly: false,
      alreadyExists: false,
      onePromoPerTransaction: false,
      includedCategories: [],
      excludedCategories: [],
      includedClasses: [],
      excludedClasses: [],
      includedSKUs: [],
      excludedSKUs: [],
      selectedCategory: categories[0],
      selectedClasses: [],
      selectedRestrictions: [],
      locations: [],
      types: ['Percent', 'Fixed', 'Other'],
      skuChoices: ['Include', 'Exclude'],
      classes: ['branded', 'generic', 'unibranded'],
      otherPromos: ['One promo per transaction', 'SCPWD included if applicable'],
      categories: ['All', 'Bone and Joint', 'Cough and Colds', 'Diabetes', 'Endocrine', 'Eye and Ear', 'Hypertension', 'Infection', 'Kits and First Aid', 'Mental Health', 'Pain and Fever', 'Urinary and Reproductive Health', 'Respiratory Health', 'Stomach Care', 'Vitamins, Minerals, and Supplements', 'Dermatologic', 'Cardiovascular', 'Blood Drugs', 'Cancer', 'Electrolytes', 'Oral Care'],
      /*
       * Functions 
       */
      getData: this.getData,
      getActivationDate: this.getActivationDate,
      getExpirationDate: this.getExpirationDate,
      checkBoxIsChecked: this.checkBoxIsChecked,
      getTypeFromDropdown: this.getTypeFromDropdown,
      selectedItem: this.selectedItem,
      includeOrExclude: this.includeOrExclude,
      removeFromList: this.removeFromList,
      getCategoryFromDropdown: this.getCategoryFromDropdown,
      getClassFromDropdown: this.getClassFromDropdown,
      clearList: this.clearList,
      setActiveStep: this.setActiveStep,
      addSKU: this.addSKU,
      logSKU: this.logSKU,
      removeFromSKUs: this.removeFromSKUs,
      getLocation: this.getLocation,
      hideNotification: this.hideNotification
    };
  }
  
  /*
   * Function: moveForward
   * Parameters: none 
   * Description: This makes the view 'move forward' by incrementing the state 'activeStep', so that the Steps component and the form knows what Step and Form component to display respectively.
   */

  moveForward() {
    if(this.state.activeStep < 5) {
      this.setState({
        activeStep: this.state.activeStep+1
      });
    }
  }

  /*
   * Function: moveBackward
   * Parameters: none 
   * Description: This makes the view 'move backward' by decrementing the state 'activeStep', so that the Steps component and the form knows what Step and Form component to display respectively.
   */

  moveBackward() {
    if(this.state.activeStep > 1) {
      this.setState({
        activeStep: this.state.activeStep-1
      });
    }
  }

  /*
   * Function: getTypeFromDropdown
   * Parameters: e (EVENT)
   * Description: This function gets the selected value from the Dropdown menu with the 'Type' label. 
   */

  getTypeFromDropdown(e) {
    this.setState({
      selectedType: e.target.value
    });
  }

  /*
   * Function: checkBoxIsChecked
   * Parameters: e (EVENT)
   * Description: This function gets the state of a checkbox whether it is checked or not, and sets the corresponding state variable for the checkbox to true if the element is checked, false otherwise. 
   */

  checkBoxIsChecked(e) {
    let checked = e.target.checked;
    let ID = e.target.id;
    this.setState({
      [ID] : checked
    });
    if(ID === 'firstTime' && checked) {
      this.setState({
        userUseLimit: 1
      });
    }
  }

  getLocation(e) {
    let checked = e.target.checked;
    let ID = e.target.id;
    if(checked) {
      if(!this.state.locations.includes(ID)) {
        this.setState({
          locations: [...this.state.locations, ID]
        });
      }
    }else {
      this.setState({
        locations: this.state.locations.filter((item) => {
          if(item === ID) {
            return false;
          }
          return true;
        })
      });
    }
  }

  /*
   * Function: getData
   * Parameters: event (EVENT)
   * Description: This gets the data from certain form elements (Input & TextArea) and sets their corresponding state variable to their current data. Usually set for the elements' onChange attribute.
   */

  getData(event) {
    let ID = event.target.id;
    this.setState({
      [ID] : event.target.value
    }); 
  } 

  /*
   * Function: getActivationDate
   * Parameters: day (DATE)
   * Description: This gets the day from the Day Picker Input component with 'Activation Date' as its label. It sets the corresponding variable to the date selected, given that the current data is a valid date (input checking for when a date is typed, not selected), otherwise the state variable remains the same.
   */

  getActivationDate(day) {
    day = new Date(day);
    if(!isNaN(day.getTime())) {
      this.setState({
        activeDate: day
      });
    }
  }

  /*
   * Function: getExpirationDate
   * Parameters: day (DATE)
   * Description: This gets the day from the Day Picker Input component with 'Expiration Date' as its label. It sets the corresponding variable to the date selected, given that the current data is a valid date (input checking for when a date is typed, not selected), otherwise the state variable remains the same.
   */

  getExpirationDate(day) {
    day = new Date(day);
    if(!isNaN(day.getTime())) {
      this.setState({
        expiryDate: day
      });
    }
  }

  /*
   * Function: setActiveStep
   * Parameters: event (EVENT)
   * Description: This function is executed when an arbitrary step button is clicked, and sets the view to that selected step to display the corresponding form. 
   */

  setActiveStep(event) {
    let ID = event.currentTarget.id;
    this.setState({
      activeStep: parseInt(ID, 10)
    });
  }

  /*
   * Function: handleKeyPress
   * Parameters: event (EVENT)
   * Description: Function that handles keypress events. As of now, the ENTER key is defined to perform the moveForward function for the form. 
   */

  handleKeyPress(event) {
    switch(event.keyCode) {
      default:
        break;
      case 13:
        this.moveForward(); 
        break;
    }
  }

  selectedItem(e) {
    let selected = e.currentTarget.name;
    if(this.state.include) {
      if(this.state.includedItems.includes(selected) === false) {
        if(this.state.excludedItems.includes(selected)) {
          this.setState({
            excludedItems: this.state.excludedItems.filter((item) => {
              if(item === selected)
                return false;
              return true;
            })
          });
        }
        this.setState({
          showIncludedNotification: true,
          showExcludedNotification: false,
          includedItem: true,
          includedSKU: false,
          itemAlreadyExists: false,
          skuAlreadyExists: false,
          includedItems: [...this.state.includedItems, selected]
        });
      }else {
        this.setState({
          itemAlreadyExists: true,
          skuAlreadyExists: false,
          showIncludedNotification: false,
        });
      }
    }else if(this.state.exclude) {
      if(this.state.excludedItems.includes(selected) === false) {
        if(this.state.includedItems.includes(selected)) {
          this.setState({
            includedItems: this.state.includedItems.filter((item) => {
              if(item === selected) 
                return false;
              return true;
            })
          });
        }
        this.setState({
          showExcludedNotification: true,
          showIncludedNotification: false,
          excludedItem: true,
          excludedSKU: false,
          itemAlreadyExists: false,
          skuAlreadyExists: false,
          excludedItems: [...this.state.excludedItems, selected]
        });
      }else {
        this.setState({
          itemAlreadyExists: true,
          skuAlreadyExists: false,
          showExcludedNotification: false
        });
      }
    }
    if(!this.state.include && !this.state.exclude) {
      this.setState({
        showIncludeExcludeError: true
      });
    }else {
      this.setState({
        showIncludeExcludeError: false
      });
    }
    window.scrollTo(0, 0);
  }

  includeOrExclude(e) {
    let radioValue = e.currentTarget.value;
    switch(radioValue) {
      default: break;
      case 'Include':
        if(this.state.exclude === true) {
          this.setState({
            exclude: false
          });
        }
        this.setState({
          include: true
        });
        break;
      case 'Exclude':
        if(this.state.include === true) {
          this.setState({
            include: false
          });
        }
        this.setState({
          exclude: true
        });
        break;
    }
  }

  removeFromList(e) {
    let toRemove = e.target.name;
    if(this.state.includedItems.includes(toRemove)) {
      let includedItems = this.state.includedItems;
      includedItems = includedItems.filter((item) => {
        if(item === toRemove) {
          return false;
        }
        return true;
      });
      this.setState({
        includedItems: includedItems
      });
    }else if(this.state.excludedItems.includes(toRemove)) {
      let excludedItems = this.state.excludedItems;
      excludedItems = excludedItems.filter((item) => {
        if(item === toRemove) {
          return false;
        }
        return true;
      });
      this.setState({
        excludedItems: excludedItems
      });
    }
    this.setState({
      includedItem: false,
      excludedItem: false,
      showExcludedNotification: false,
      showIncludedNotification: false,
    });
  }
  
  getCategoryFromDropdown(e) {
    let selected = e.currentTarget.value;
    this.setState({
      selectedCategory: selected
    });
  }

  removeFromSKUs(e) {
    let skuToRemove = e.target.name;
    let notInIncluded = true;
    let includedSKUs = this.state.includedSKUs.filter((item) => {
      if(item.category === skuToRemove) {
        notInIncluded = false;
        return false;
      }
      return true;
    });
    if(notInIncluded) {
      let excludedSKUs = this.state.excludedSKUs.filter((item) => {
        if(item.category === skuToRemove) {
          return false;
        }
        return true;
      });
      this.setState({
        excludedSKUs: excludedSKUs
      });
    }else {
      this.setState({
        includedSKUs: includedSKUs
      });
    }
    this.setState({
      includedSKU: false,
      excludedSKU: false,
      showExcludedNotification: false,
      showIncludedNotification: false,
    });
  }

  addSKU() {
    let selectedCategory = this.state.selectedCategory;
    if(this.state.include) {
      let classList = [];
      if(this.state.branded) {
        classList.push('Branded');
      }
      if(this.state.generic) {
        classList.push('Generic');
      }
      if(this.state.unibranded) {
        classList.push('Unibranded');
      }
      if(selectedCategory === 'All') {
        let includedSKUs = this.state.includedSKUs;
        if(includedSKUs.length > 0) {
          this.setState({
            skuAlreadyExists: true,
            itemAlreadyExists: false,
            showExcludedNotification: false,
            showIncludedNotification: false
          });
        }else {
          this.state.categories.map((item) => {
            if(item !== 'All') {
              includedSKUs.push({
                category: item,
                classList: classList,
                rxOnly: this.state.rxOnly,
                otcOnly: this.state.otcOnly
              });
            }
            return true;
          });
          this.setState({
            showExcludedNotification: false,
            showIncludedNotification: true,
            includedSKUs: includedSKUs,
            includedSKU: true,
            includedItem: false,
            multipleSKUs: true,
            excludedSKU: false,
            skuAlreadyExists: false,
            itemAlreadyExists: false,
            excludedSKUs: [],
          });
        }
      }else {
        let alreadyExists = false;
        let includedSKUs = this.state.includedSKUs.filter((item) => {
          if(item.category === selectedCategory) {
            alreadyExists = true;
          }
          return item;
        });
        let excludedSKUs = this.state.excludedSKUs.filter((item) => {
          if(item.category === selectedCategory) {
            return false;
          }
          return true;
        });
        if(alreadyExists) {
          this.setState({
            skuAlreadyExists: true,
            itemAlreadyExists:false,
            showExcludedNotification: false,
            showIncludedNotification: false,
          });
        }else {
          includedSKUs.push({
            category: selectedCategory,
            classList: classList,
            rxOnly: this.state.rxOnly,
            otcOnly: this.state.otcOnly
          });
          this.setState({
            showIncludedNotification: true,
            showExcludedNotification: false,
            includedSKUs: includedSKUs,
            excludedSKUs: excludedSKUs,
            multipleSKUs: false,
            includedSKU: true,
            includedItem: false,
            excludedSKU: false,
            itemAlreadyExists: false,
            skuAlreadyExists: false
          });
        }
      }
    }else if(this.state.exclude) {
      let classList = [];
      if(this.state.branded) {
        classList.push('Branded');
      }
      if(this.state.generic) {
        classList.push('Generic');
      }
      if(this.state.unibranded) {
        classList.push('Unibranded');
      }
      if(selectedCategory === 'All') {
        let excludedSKUs = this.state.excludedSKUs;
        if(excludedSKUs.length > 0) {
          this.setState({
            skuAlreadyExists: true,
            itemAlreadyExists: false,
            showExcludedNotification: false,
            showIncludedNotification: false
          });
        }else {
          this.state.categories.map((item) => {
            if(item !== 'All') {
              excludedSKUs.push({
                category: item,
                classList: classList,
                rxOnly: this.state.rxOnly,
                otcOnly: this.state.otcOnly
              });
            }
            return true;
          });
          this.setState({
            includedSKUs: [],
            excludedSKUs: excludedSKUs,
            multipleSKUs: true,
            excludedItem: false,
            excludedSKU: true,
            includedSKU: false,
            skuAlreadyExists: false,
            itemAlreadyExists: false,
            showExcludedNotification: true,
            showIncludedNotification: false
          });
        }
      }else {
        let alreadyExists = false;
        let excludedSKUs = this.state.excludedSKUs.filter((item) => {
          if(item.category === selectedCategory) {
            alreadyExists = true;
          }
          return true;
        });
        let includedSKUs = this.state.includedSKUs.filter((item) => {
          if(item.category === selectedCategory) {
            return false;
          }
          return true;
        });
        if(alreadyExists) {
          this.setState({
            skuAlreadyExists: true,
            itemAlreadyExists: false,
            showExcludedNotification: false,
            showIncludedNotification: false
          });
        }else {
          excludedSKUs.push({
            category: selectedCategory,
            classList: classList,
            rxOnly: this.state.rxOnly,
            otcOnly: this.state.otcOnly
          });
          this.setState({
            excludedSKUs: excludedSKUs,
            includedSKUs: includedSKUs,
            multipleSKUs: false,
            excludedSKU: true,
            includedSKU: false,
            excludedItem: false,
            skuAlreadyExists: false,
            itemAlreadyExists: false,
            showExcludedNotification: true,
            showIncludedNotification: false
          });
        }
        
      }
    }
    if(!this.state.include && !this.state.exclude) {
      this.setState({
        showIncludeExcludeError: true
      });
    }else {
      this.setState({
        showIncludeExcludeError: false
      });
    }
    window.scrollTo(0,0);
  }

  hideNotification(e) {
    let ID = e.target.id;
    this.setState({
      [ID]: false
    });
    if(ID === 'itemAlreadyExists') {
      this.setState({
        skuAlreadyExists: false
      });
    }
  }

  submitData() {
    let postValue = {
      code: this.state.code,
      description: this.state.description,
      activation: this.state.activeDate,
      expiration: this.state.expiryDate,
      waiveFees: this.state.waiveFees,
      totalUseLimit: this.state.totalUseLimit,
      dailyLimit: this.state.dailyLimit,
      locations: this.state.locations,
      company: this.state.company,
      userUseLimit: this.state.userUseLimit,
      firstTime: this.state.firstTime,
      includedSKUs: this.state.includedSKUs,
      includedItems: this.state.includedItems,
      excludedSKUs: this.state.excludedSKUs,
      excludedItems: this.state.excludedItems,
      onePromoPerTransaction: this.state.onePromoPerTransaction,
      type: this.state.selectedType
    };
    if(postValue.type === 'Percent') {
      postValue.percentOff = this.state.percentOff;
      postValue.maxAmount = this.state.maxAmount;
    }else if(postValue.type === 'Fixed') {
      postValue.amount = this.state.amount;
    }
    postValue.minPurchase = this.state.minPurchase;
    console.log(postValue);
  }

  clearList() {
    this.setState({
      includedCategories: [],
      includedClasses: [],
      includedItems: [],
      excludedCategories: [],
      excludedClasses: [],
      excludedItems: [],
      includedSKUs: [],
      excludedSKUs: [] 
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    axios.get('http://musical-happiness.herokuapp.com/product/?format=json').then(response => { 
      this.setState({endpointData: response.data});
    });
  }

  /*
   * Function: render
   * Parameters: none
   * Description: Function that 'renders' the view with the corresponding components it returns. 
   */

  render() {
    return(
      <Context.Provider value={this.state}>
      <div className='fullModule' ref='addCoupon'>
        <div className='Module'>
          <h1 className='title is-size-4'>Add Coupon</h1>
          <Steps isActive={this.state.activeStep} handleClick={this.setActiveStep}/>
          <div className={this.state.activeStep === 1 ? 'form animated fadeIn' : 'form is-hidden'}>
            <BasicInfoForm />
          </div>
          <div className={this.state.activeStep === 2 ? 'form animated fadeIn' : 'form is-hidden'}>
            <UserRestrictionsForm />
          </div>
          <div className={this.state.activeStep === 3 ? 'form animated fadeIn' : 'form is-hidden'}>
            <SKURestrictionsForm />
          </div>
          <div className={this.state.activeStep === 4 ? 'form animated fadeIn' : 'form is-hidden'}>
            <TransactionRestrictionsForm />
          </div>
          <div className={this.state.activeStep === 5 ? 'form' : 'form is-hidden'}>
            <ReviewDataForm />
          </div>
        </div>
        <div className="Footer">
          <div className="field is-grouped is-grouped-centered">
            <p className={this.state.activeStep > 1 ? 'control': 'control is-hidden'}>
              <Button label='Previous' handleClick={this.moveBackward}/>
            </p>
            <p className={this.state.activeStep < 5 ? 'control': 'control is-hidden'}>
              <Button label='Next' handleClick={this.moveForward}/>
            </p>
            <p className={this.state.activeStep === 5 ? 'control': 'control is-hidden'}>
              <Button label='Submit' handleClick={this.submitData}/>
            </p>
          </div>
        </div>
      </div>
      </Context.Provider>
    );
  }
}

export {AddCoupon, Context};