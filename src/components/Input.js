import React from 'react';

const Input = (props) => {
  return(
    <div className="field is-horizontal">
      <label className="label field-label">{props.label}</label>
      <div className="field-body">
        <input id={props.id} className="input" type="text" onChange={props.handleChange}/>
      </div>
    </div>
  );
}

export default Input;