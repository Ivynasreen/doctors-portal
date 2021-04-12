import React from 'react';

const TestimonialDetail = (props) => {
    const {quote,name,from ,image} = props.testimonial;
    return (
            <div className="col-md-4">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <p className="card-text text-center">{quote}</p>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <img className="mx-3" src={image} alt="" width="60"/>
                        <div className = "mt-3 text-center">
                            <h6 className="text-info">{name}</h6>
                            <p>{from}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default TestimonialDetail;