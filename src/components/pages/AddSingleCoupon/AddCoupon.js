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
import BasicInfoForm from './forms/BasicInfoForm';
import UserRestrictionsForm from './forms/UserRestrictionsForm';
import SKURestrictionsForm from './forms/SKURestrictionsForm';
import TransactionRestrictionsForm from './forms/TransactionRestrictionsForm';
import ReviewDataForm from './forms/ReviewDataForm';
import axios from 'axios';

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
    const types = ['Percent', 'Fixed', 'Other'];
    this.state = {
      activeStep: 1,
      selectedType: types[0],
      code: '',
      totalUseLimit: '',
      dailyLimit: '',
      location: '',
      company: '',
      userUseLimit: '',
      item: '',
      percentOff: '',
      amount: '',
      minPurchase: '',
      maxAmount: '',
      description: '',
      activeDate: new Date(),
      expiryDate: new Date(),
      firstTime: false,
      rxOnly: false,
      waiveFees: false,
      endpointData: []
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
    console.log(this.state.code);
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

  handleKeyPress(event) {
    switch(event.keyCode) {
      default:
        break;
      case 13:
        this.moveForward(); 
        break;
    }
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
    const types = ['Percent', 'Fixed', 'Other'];
    const skuChoices = ['Include', 'Exclude'];
    const classes = ['branded', 'generic', 'unibranded'];
    const otherPromos = ['One promo per transaction', 'SCPWD included if applicable']
    const categories = ['Bone and Joint', 'Cough and Colds', 'Diabetes', 'Endocrine', 'Eye and Ear', 'Hypertension', 'Infection', 'Kits and First Aid', 'Mental Health', 'Pain and Fever', 'Urinary and Reproductive Health', 'Respiratory Health', 'Stomach Care', 'Vitamins, Minerals, and Supplements', 'Dermatologic', 'Cardiovascular', 'Blood Drugs', 'Cancer', 'Electrolytes', 'Oral Care'];
    return(
      <div className='fullModule'>
        <div className='Module'>
          <h1 className='title is-size-4'>Add Coupon</h1>
          <Steps isActive={this.state.activeStep} handleClick={this.setActiveStep}/>
          <div className={this.state.activeStep === 1 ? 'form animated fadeIn' : 'form is-hidden'}>
            <BasicInfoForm getData={this.getData} getActivationDate={this.getActivationDate} getExpirationDate={this.getExpirationDate} checkBoxIsChecked={this.checkBoxIsChecked} />
          </div>
          <div className={this.state.activeStep === 2 ? 'form animated fadeIn' : 'form is-hidden'}>
            <UserRestrictionsForm getData={this.getData} checkBoxIsChecked={this.checkBoxIsChecked} />
          </div>
          <div className={this.state.activeStep === 3 ? 'form animated fadeIn' : 'form is-hidden'}>
            <SKURestrictionsForm skuChoices={skuChoices} getData={this.getData} categories={categories} classes={classes} checkBoxIsChecked={this.checkBoxIsChecked} endpointData={this.state.endpointData} />
          </div>
          <div className={this.state.activeStep === 4 ? 'form animated fadeIn' : 'form is-hidden'}>
            <TransactionRestrictionsForm getTypeFromDropdown={this.getTypeFromDropdown} types={types} getData={this.getData} selectedType={this.state.selectedType} otherPromos={otherPromos} />
          </div>
          <div className={this.state.activeStep === 5 ? 'form' : 'form is-hidden'}>
            <ReviewDataForm state={this.state}/>
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
              <Button label='Submit' handleClick={this.moveForward}/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCoupon;