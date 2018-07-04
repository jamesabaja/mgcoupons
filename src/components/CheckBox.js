import React from 'react';

const CheckBox = (props) => {
  return(
    <div className='field is-horizontal'>
      <div className="field-label"></div>
      <div className='field-body'>
        <label className="checkbox">
          <input type="checkbox" id={props.id} onChange={props.handleChange}/>
          &nbsp;{props.label}
        </label>
      </div>
    </div>
  ); 
}

export default CheckBox;