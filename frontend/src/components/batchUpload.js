import React, { Component } from 'react';

class batchUpload extends Component {
  constructor(props) {
    super(props);
    this.getFileName = this.getFileName.bind(this);
    this.state = {
      fileName: ''
    };
  }

  getFileName(e) {
    let files = e.target.files;
    if(files.length > 0) {
      this.setState({
        fileName: files[0].name
      });
    }
  }
  
  render() {
    return(
      <div className='Module'>
        <h1 className='title is-size-4'>Add Coupons</h1>
        <h2 className='subtitle'>Batch Upload</h2>
        <div class='form'>
        <div class="file is-primary has-name is-fullwidth">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" onChange={this.getFileName}/>
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose a file…
              </span>
            </span>
            <span class="file-name">
              {this.state.fileName}
            </span>
          </label>
        </div>
        <p className='help'>Download csv template <a>here.</a></p>
        </div>
      </div>
    );
  }
}

export default batchUpload;