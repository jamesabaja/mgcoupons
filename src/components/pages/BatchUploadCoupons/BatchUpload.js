/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the Batch Upload component
 *                               Added function to get the file name of uploaded file
 * James Abaja          7/5/18   Added function descriptions
 *                               Renamed file locations of modules due to restructuring of project directory
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React, { Component } from 'react';
import FileUploader from '../../form/FileUploader';

class BatchUpload extends Component {

  /*
   * Function: constructor
   * Parameters: props
   * Description: Constructor function of the class, containing the initialization of the state variables and the binding of the functions inside the class. 
   */

  constructor(props) {
    super(props);
    this.getFileName = this.getFileName.bind(this);
    this.state = {
      fileName: ''
    };
  }

  /*
   * Function: getFileName
   * Parameters: e (EVENT)
   * Description: Function that gets the filename of the uploaded file and sets it to its state variable to be displayed. 
   */

  getFileName(e) {
    let files = e.target.files;
    if(files.length > 0) {
      this.setState({
        fileName: files[0].name
      });
    }
  }

  /*
   * Function: render
   * Parameters: none
   * Description: Function that 'renders' the view with the corresponding components it returns. 
   */
  
  render() {
    return(
      <div className='Module'>
        <h1 className='title is-size-4'>Add Coupons</h1>
        <h2 className='subtitle'>Batch Upload</h2>
        <div className='form'>
          <FileUploader handleChange={this.getFileName} fileName={this.state.fileName}/>
          <p className='help'>Download csv template <a>here.</a></p>
        </div>
      </div>
    );
  }
}

export default BatchUpload;