import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className = "col-md-4 text-center">
            <img style = {{height: '50px'}}src = {service.image} alt = ""/>
            <h4 className = "mt-3 mb-3">{service.title}</h4>
            <p className = "text-secondary">Lorem ipsum is simply dummy text and printing in the way has been given.</p>

        </div>
    );
};

export default ServiceDetail;