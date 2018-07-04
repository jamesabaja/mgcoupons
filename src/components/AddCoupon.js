import React, { Component }from 'react';
import 'react-day-picker/lib/style.css';
import Steps from './Steps';
import Input from './Input';
import DatePicker from './DatePicker';
import TextArea from './TextArea';
import CheckBox from './CheckBox';
import Dropdown from './Dropdown';
import '../assets/animate.css';
import RadioButton from './RadioButton';


class AddCoupon extends Component {
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
      waiveFees: false
    };
  }

  moveForward() {
    if(this.state.activeStep < 5) {
      this.setState({
        activeStep: this.state.activeStep+1
      });
    }
    console.log(this.state.code);
  }

  moveBackward() {
    if(this.state.activeStep > 1) {
      this.setState({
        activeStep: this.state.activeStep-1
      });
    }
  }

  getTypeFromDropdown(e) {
    this.setState({
      selectedType: e.target.value
    });
  }

  checkBoxIsChecked(e) {
    let checked = e.target.checked;
    let ID = e.target.id;
    this.setState({
      [ID] : checked
    });
  }

  getData(event) {
    let ID = event.target.id;
    this.setState({
      [ID] : event.target.value
    }); 
  } 

  getActivationDate(day) {
    day = new Date(day);
    if(!isNaN(day.getTime())) {
      this.setState({
        activeDate: day
      });
    }
  }

  getExpirationDate(day) {
    day = new Date(day);
    if(!isNaN(day.getTime())) {
      this.setState({
        expiryDate: day
      });
    }
  }

  setActiveStep(event) {
    let ID = event.currentTarget.id;
    this.setState({
      activeStep: parseInt(ID, 10)
    });
  }

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
            <Input label='Coupon Code' id='code' handleChange={this.getData}/>
            <TextArea label='Description' id='description' handleChange={this.getData}/>
            <DatePicker label='Activation Date' id='activeDate' handleChange={this.getActivationDate}/>
            <DatePicker label='Expiration Date' id='expiryDate' handleChange={this.getExpirationDate}/>
            <CheckBox id='waiveFees' label='Waive Service and Delivery Fees' handleChange={this.checkBoxIsChecked}/>
            <Input label='Total Use Limit' id='totalUseLimit' handleChange={this.getData}/>
            <Input label='Uses per Day' id='dailyLimit' handleChange={this.getData}/>
          </div>
          <div className={this.state.activeStep === 2 ? 'form animated fadeIn' : 'form is-hidden'}>
            <Input label='Location/s' id='location' handleChange={this.getData}/>
            <Input label='Company' id='company' handleChange={this.getData}/>
            <Input label='Uses per User' id='userUseLimit' handleChange={this.getData}/>
            <CheckBox id='firstTime' label='First-time users' handleChange={this.checkBoxIsChecked}/>
          </div>
          <div className={this.state.activeStep === 3 ? 'form animated fadeIn' : 'form is-hidden'}>
            <RadioButton choices={skuChoices} name="skuChoices"/>
            <Input label='Item/Brand' id='item' handleChange={this.getData}/>
            <Dropdown label='Category' options={categories}/>
            <Dropdown label='Class' options={classes}/>
            <CheckBox id='rxOnly' label='Prescription Medicine only' handleChange={this.checkBoxIsChecked}/>
          </div>
          <div className={this.state.activeStep === 4 ? 'form animated fadeIn' : 'form is-hidden'}>
            <Dropdown onClick={this.getTypeFromDropdown} label='Type' options={types}/>
            <div className={this.state.selectedType === 'Percent' ? 'field':' field is-hidden'}><Input label='Percent Off' id='percentOff' handleChange={this.getData}/></div>
            <div className={this.state.selectedType === 'Fixed' ? 'field':'field is-hidden'}><Input label='Amount' id='amount' handleChange={this.getData}/></div>
            <div className='field'><Input label='Minimum Purchase' id='minPurchase' handleChange={this.getData}/></div>
            <div className={this.state.selectedType === 'Percent' ? 'field':'field is-hidden'}><Input label='Maximum Discount' id='maxAmount' handleChange={this.getData}/></div>
            <RadioButton choices={otherPromos} name="otherPromos"/>
          </div>
          <div className={this.state.activeStep === 5 ? 'form' : 'form is-hidden'}>
            <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
              <thead>
                <tr>
                  <th>BASIC COUPON INFO</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {this.state.code !== '' && <tr>
                  <th>Coupon Code</th>
                  <td>{this.state.code}</td>
                </tr>}
                {this.state.description !== '' && <tr>
                  <th>Description</th>
                  <td>{this.state.description}</td>
                </tr>}
                <tr>
                  <th>Activation Date</th>
                  <td>{this.state.activeDate.toDateString()}</td>
                </tr>
                <tr>
                  <th>Expiry Date</th>
                  <td>{this.state.expiryDate.toDateString()}</td>
                </tr>
                <tr>
                  <th>Waive Service and Delivery Fees?</th>
                  <td>{this.state.waiveFees ? 'Yes' : 'No'}</td>
                </tr>
                {this.state.totalUseLimit !== '' && <tr>
                  <th>Total Use Limit</th>
                  <td>{this.state.totalUseLimit}</td>
                </tr>}
                {this.state.dailyLimit !== '' && <tr>
                  <th>Daily Use Limit</th>
                  <td>{this.state.dailyLimit}</td>
                </tr>}
                </tbody>
                </table>
                <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
                  <thead>
                    <tr>
                      <th>USER RESTRICTIONS</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                {this.state.location !== '' && <tr>
                  <th>Location/s</th>
                  <td>{this.state.location}</td>
                </tr>}
                {this.state.company !== '' && <tr>
                  <th>Company</th>
                  <td>{this.state.company}</td>
                </tr>}
                {this.state.userUseLimit !== '' && <tr>
                  <th>Uses per User</th>
                  <td>{this.state.userUseLimit}</td>
                </tr>}
                <tr>
                  <th>First-time users only?</th>
                  <td>{this.state.firstTime ? 'Yes' : 'No'}</td>
                </tr>
                </tbody>
                </table>
                <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
                  <thead>
                    <tr>
                      <th>SKU RESTRICTIONS</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                {this.state.item !== '' && <tr>
                  <th>Item</th>
                  <td>{this.state.item}</td>
                </tr>}
                <tr>
                  <th>Prescription Medicine only?</th>
                  <td>{this.state.rxOnly ? 'Yes' : 'No'}</td>
                </tr>
                </tbody>
                </table>
                <table className='table fixed is-striped is-hoverable is-fullwidth has-text-centered'>
                  <thead>
                    <tr>
                      <th>TRANSACTION RESTRICTIONS</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                {this.state.selectedType !== '' && <tr>
                  <th>Type</th>
                  <td>{this.state.selectedType}</td>
                </tr>}
                {this.state.selectedType !== 'Fixed' && this.state.percentOff !== '' &&
                <tr>
                  <th>Percent Off</th>
                  <td>{this.state.percentOff}</td>
                </tr>}
                {this.state.selectedType !== 'Percent' && this.state.amount !== '' && 
                <tr>
                  <th>Amount</th>
                  <td>{this.state.amount}</td>
                </tr>}
                {this.state.minPurchase !== '' && <tr>
                  <th>Minimum Purchase</th>
                  <td>{this.state.minPurchase}</td>
                </tr>}
                {this.state.selectedType !== 'Fixed' && this.state.maxAmount !== '' &&
                <tr>
                  <th>Maximum Amount</th>
                  <td>{this.state.maxAmount}</td>
                </tr>}
              </tbody>
            </table>
            {/*<p><b>Coupon Code:</b> {this.state.code}</p>
            <p><b>Activation Date:</b> {this.state.activeDate.toDateString()}</p>
            <p><b>Expiration Date:</b> {this.state.expiryDate.toDateString()}</p>
            <p><b>Total Use Limit:</b> {this.state.totalUseLimit}</p>
            <p><b>Daily Use Limit:</b> {this.state.dailyLimit}</p>
            <p><b>Location/s:</b> {this.state.location}</p>
            <p><b>Company:</b> {this.state.company}</p>
            <p><b>Uses per User:</b> {this.state.userUseLimit}</p>
            <p><b>Item:</b> {this.state.item}</p>
            <p><b>Type:</b> {this.state.selectedType}</p>
            <p><b>Percent Off:</b> {this.state.percentOff}</p>
            <p><b>Amount:</b> {this.state.amount}</p>
            <p><b>Minimum Purchase:</b> {this.state.minPurchase}</p>
            <p><b>Maximum Amount:</b> {this.state.maxAmount}</p>*/}
          </div>
        </div>
        <div className="Footer">
          <div className="field is-grouped is-grouped-centered">
            <p className={this.state.activeStep > 1 ? 'control': 'control is-hidden'}>
              <button className="button is-primary" onClick={this.moveBackward}>
                Previous
              </button>
            </p>
            <p className={this.state.activeStep < 5 ? 'control': 'control is-hidden'}>
              <button className="button is-primary" onClick={this.moveForward}>
                Next
              </button>
            </p>
            <p className={this.state.activeStep === 5 ? 'control': 'control is-hidden'}>
              <button className="button is-primary" onClick={this.moveForward}>
                Submit
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCoupon;