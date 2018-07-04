import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const DatePicker = (props) => {
  return(
    <div className='field is-horizontal'>
      <div className="label field-label">{props.label}</div>
      <div className='field-body'>
        <DayPickerInput onDayChange={props.handleChange}/>
      </div>
    </div>
  );
}

export default DatePicker;