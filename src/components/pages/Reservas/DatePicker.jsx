import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useState } from "react";

const DatePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (item) => {
    setState([item.selection]);
  };

  return (
    <div className="date-picker-container">
      <button className="reservas-button" onClick={toggleDatePicker}>
        Haz Click para Reservar
      </button>
      {showDatePicker && (
        <div className="date-range-container">
          <DateRange
            editableDateInputs={true}
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
          <button className="search-button">Buscar Habitaciones</button>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
