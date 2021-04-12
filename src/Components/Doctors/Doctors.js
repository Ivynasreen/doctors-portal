import React from 'react';
import doctor from '../../images/5790-removebg.png';
import DoctorsInfo from '../DoctorsInfo/DoctorsInfo';



const doctorsInfo = [
    {
        name: 'Dr. Caudi',
        image: doctor,
        phone: +1245678990
    },
    {
        name: 'Dr. Caudi',
        image: doctor,
        phone: +1245678990
    },
    {
        name: 'Dr. Caudi',
        image: doctor,
        phone: +1245678990
    }
]
const Doctors = () => {

    return (
            <section className="testimonial my-5 py-5">
                <div className="container">
                    <div className="section-header">
                        <h5 className="text-info text-center text-uppercase">our doctors</h5>
                    </div>
                    <div className = "d-flex align-items-center">
                        <div className="row">
                                {
                                    doctorsInfo.map(doctor => <DoctorsInfo doctor={doctor} key={doctor.name}/>)
                                }
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Doctors;