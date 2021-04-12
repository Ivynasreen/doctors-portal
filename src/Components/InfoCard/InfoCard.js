import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

        const InfoCard = ({ info }) => {
            return (
                <div className="col-md-4 text-white info-card">
                    <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                        <div className="mr-3">
                            <FontAwesomeIcon className="info-icon" icon={info.image}></FontAwesomeIcon>
                        </div>
                        <div>
                            <h6>{info.title}</h6>
                            <small>{info.details}</small>
                        </div>
                    </div>
                </div>
     
    );
};

export default InfoCard;