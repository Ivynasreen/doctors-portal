import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className = "contact my-5 py-5">
            <div className="container">
                <div>
                    <h5 className = "text-info text-center">Contact Us</h5>
                    <h1 className = "text-center">Always Connect With Us</h1>
                </div>
                <div  className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email Address"/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <textarea name ="" className="form-control" cols = "30" rows="10" placeholder="Your Message*"></textarea>
                        </div>
                        <br></br>
                        <div className="form-group text-center">
                           <button type="button" className="btn btn-info"> Submit </button>
                       </div>
                    </form>
                </div>
            </div>
        </section>
            
        
    );
};

export default Contact;