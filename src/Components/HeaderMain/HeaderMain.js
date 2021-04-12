import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../images/chair.png';


const HeaderMain = () => {
    return (
        <main style = {{height :'600px'}}className = "d-flex align-items-center">
            <div className = "col-md-4 offset-md-1">
                <h1>Your New Smile <br/>Starts Here</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nulla assumenda inventore voluptates ea voluptatum enim perferendis nisi nostrum molestiae.</p>
                <Link to ="/appointment"><button className = "btn btn-info text-white">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
        
    );
};

export default HeaderMain;