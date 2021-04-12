import React from 'react';

const DoctorsInfo = ({doctor}) => {
    return (
        <div className="col-md-4">
                <div className="card shadow-sm">
                    <div className="d-flex align-items-center mt-3">
                            <img className="mx-3" src={doctor.image} alt="" width="400"/>
                    </div>
                    <div className="card-body text-center">
                        <h5>{doctor.name}</h5>
                        <p className="card-text">+{doctor.phone}</p>
                    </div>
                </div>
            </div>
    );
};

export default DoctorsInfo;