import React from 'react';
import BookingInfo from '../BookingInfo/BookingInfo';

const bookingInfo =  [
    {
        id : 1,
        title:'Teeth Orthodontics',
        time: '8.00 AM - 9.00 AM',
        space: '10 SPACES AVAILABLE'
    },
    {
        id : 2,
        title:'Cosmetic Dentistry',
        time: '8.40 AM - 9.40 AM',
        space: '10 SPACES AVAILABLE'
    },
    {
        id : 3,
        title:'Teeth Cleaning',
        time: '5.00 AM - 6.00 AM',
        space: '10 SPACES AVAILABLE'
    },
    {
        id : 4,
        title:'Cavity Protection',
        time: '9.00 AM - 10.00 AM',
        space: '10 SPACES AVAILABLE'
    },
    {
        id : 5,
        title:'Teeth Orthodontics',
        time: '11.00 AM - 12.00 PM',
        space: '10 SPACES AVAILABLE'
    },
    {
        id : 6,
        title:'Teeth Orthodontics',
        time: '8.00 AM - 9.00 AM',
        space: '10 SPACES AVAILABLE'
    }
]
const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className = "text-center"style = {{color: '#1cc7c1'}}>Available Appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingInfo.map(booking=><BookingInfo booking={booking} date = {date} key={booking.id}></BookingInfo>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;