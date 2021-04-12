import React, { useState } from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Navbar from '../Shared/Navbar/Navbar';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate , setSelectedDate] = useState(new Date());
    const handleChange = date => {
        console.log(date)
        setSelectedDate(date)
    }
    return (
        <div>
            <Navbar />
            <AppointmentHeader handleChange = {handleChange}/>
            <BookAppointment date={selectedDate}/>
        </div>
    );
};

export default Appointment;