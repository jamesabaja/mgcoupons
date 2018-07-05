/* 
 * Code History
 * Programmer           Date     Description
 * James Abaja          7/4/18   Created the file uploader component.
 */

/*
 * File Creation Date: 7/4/18
 * Software Name: MGCoupons
 * Development Group: James Abaja
 * Client Group: Marketing Team, IT Team
 * Purpose of the Software: To aid the Marketing Team in managing the company's Coupon System, by creating new coupons, viewing and updating coupon details, and deactivating coupons if necessary.
 */

import React from 'react';

const FileUploader = (props) => {
  return(
    <div className="file is-primary has-name is-fullwidth">
      <label className="file-label">
        <input className="file-input" type="file" name="resume" onChange={props.handleChange}/>
        <span className="file-cta">
          <span className="file-icon">
            <i className="fas fa-upload"></i>
          </span>
          <span className="file-label">
            Choose a file…
          </span>
        </span>
        <span className="file-name">
          {props.fileName}
        </span>
      </label>
    </div>
  );
}

export default FileUploader;