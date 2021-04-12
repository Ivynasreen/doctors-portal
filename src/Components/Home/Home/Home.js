import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import FeaturedService from '../../FaeturedService/FeaturedService';
import Services from '../../Services/Services';
import Header from '../../Header/Header';
import Testimonial from '../../Testimonial/Testimonial';
import Blog from '../../Blog/Blog';
import Doctors from '../../Doctors/Doctors';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
           <Header /> 
           <Services />
           <FeaturedService />
           <MakeAppointment />
           <Testimonial />
           <Blog />
           <Doctors />
           <Contact />
           <Footer />
        </div>
    );
};

export default Home;