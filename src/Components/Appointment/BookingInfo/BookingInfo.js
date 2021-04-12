import React, {useState} from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';


const BookingInfo = ({booking ,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
    return (
      
            <div className="col-md-4 mb-5">
                <div className="card p-3">
                    <div className="card-body text-center">
                        <h5 style ={{color: '#1cc7c1'}}className = "card-title">{booking.title}</h5>
                        <h6>{booking.time}</h6>
                        <p>{booking.space}</p>
                        <button onClick = {openModal}className = "text-uppercase btn btn-info">book appointment</button>
                        <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.title} date={date} closeModal={closeModal} />
                    </div>
                </div>
            
            </div>
    );
};

export default BookingInfo;