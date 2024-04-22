import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react'

const DatePicker = () => {
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
      }
    ]);
  
    return (
      <div className="date-range-container">
        <DateRange
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
    );
  }
  
  export default DatePicker;