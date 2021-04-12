import React, { useState } from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleChange}) => {
    return (
        <div>
            <main style = {{height :'600px'}}className = "d-flex mt-5">
                <div className = "col-md-4 offset-md-1">
                    <h1>Appointment</h1>
                    <Calendar
                        onChange={handleChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;