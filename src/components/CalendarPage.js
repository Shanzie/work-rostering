import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarPage.css';

function CalendarPage() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
        // Additional logic
    };

    return (
        <div className="calendar-container">
            <h1 className="calendar-header">Book Your Shift</h1>
            <Calendar
                onChange={onChange}
                value={date}
                className="react-calendar"
            />
            {/* Additional UI elements */}
        </div>
    );
}


export default CalendarPage;
