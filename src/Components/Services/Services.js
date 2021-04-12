import React from 'react';
import fluoride from '../../images/001-dental.png';
import cavity from '../../images/tooth (1).png';
import whitening from '../../images/tooth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        title: 'Fluoride Treatment',
        image: fluoride

    },
    {
        title: 'Cavity Filling',
        image: cavity
    },
    {
        title: 'Teeth Whitening',
        image: whitening
    }
]

const Services = () => {

    return (
        <section>
            <div className = "text-center">
                <h5 style={{color: '#1CC7C1'}}>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className = "d-flex justify-content-center">
                <div className = "row w-75 mt-5">
                    {
                        serviceData.map(service=><ServiceDetail service = {service}></ServiceDetail>)
                    }
                </div>
        </div>
        </section>
    );
};

export default Services;