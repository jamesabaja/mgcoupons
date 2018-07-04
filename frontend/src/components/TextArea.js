import React from 'react';

const TextArea = (props) => {
  return(
    <div className='field is-horizontal'>
      <label className="label field-label">{props.label}</label>
      <div className='field-body'>
        <textarea id={props.id} onChange={props.handleChange} className="textarea"/>
      </div>
    </div>
  );
}

export default TextArea;