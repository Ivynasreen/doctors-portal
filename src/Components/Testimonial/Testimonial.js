import React from 'react';
import wilson from '../../images/Ellipse 1.png';
import ema from '../../images/Ellipse 2.png';
import john from '../../images/Ellipse 3.png';
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
import './Testimonial';


    const testimonialInfo = [
        {
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
            name: 'Winson Harry',
            from: 'California',
            image: wilson,
        },
        {
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
            name: 'Ema Harry',
            from: 'California',
            image: ema,
        },
        {
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
            name: 'John Harry',
            from: 'California',
            image: john,
        }
    ]
    const Testimonial = () => {
        return (
            <section className="testimonial my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-info text-uppercase">Testimonial</h5>
                    <h1 className = "mb-5">What Our Patients <br/> Says </h1>
                </div>
                <div className="row">
                        {
                            testimonialInfo.map(testimonial => <TestimonialDetail testimonial={testimonial} key={testimonial.name}/>)
                        }
                    </div>
            </div>
        </section>
        );
    };

export default Testimonial;