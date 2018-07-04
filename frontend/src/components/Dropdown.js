import React from 'react';

const Dropdown = (props) => {
  return(
    <div className="field is-horizontal">
      <label className="label field-label">{props.label}</label>
      <div className="field-body">
        <div className="control">
          <div className="select is-primary">
            <select onClick={props.onClick !== undefined ? props.onClick : null}>
              {props.options.map((val, i) => <option key={i}>{val}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;