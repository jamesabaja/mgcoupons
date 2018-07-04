import React from 'react';

const RadioButton = (props) => {
  return(
    <div className="field is-horizontal">
      <div className="field-label">{props.label}</div>
      <div className="field-body">
        <div className="control">
          {props.choices.map((val, i) => 
            <label className="radio" key={i}>
              <input type="radio" name={props.name} key={i}/>
              &nbsp;{val}
            </label>
          )}
        </div>
      </div>
    </div>
  );
}

export default RadioButton;