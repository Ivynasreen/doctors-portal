import React from 'react';
import caudi from '../../images/Ellipse 1.png';
import ema from '../../images/Ellipse 2.png';
import john from '../../images/Ellipse 3.png';
import BlogInfo from '../BlogInfo/BlogInfo';
    const blogInfo = [
        {   
            title: 'Check at least a doctor in a year for your teeth',
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
            name: 'Ema Kabir',
            date: '22 August 2021',
            image: ema,
        },
        {   
            title: '2 times of brush in a day can keep you healthy',
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
            name: 'Dr.Caudi',
            date: '23 April 2021',
            image: caudi,
        },
        {
            title: 'The tooth cancer is taking a  challenge',
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
            name: 'Dr.John Mitchel',
            date: '23 April 2021',
            image: john,
        },
    ]
    const Blog = () => {
        return (
            <section className="blog my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-info text-uppercase">Our Blog</h5>
                    <h1 className = "mb-5">From Our Blog News <br/> News </h1>
                </div>
                <div className="row">
                        {
                            blogInfo.map(blog => <BlogInfo blog={blog} key={blog.name}/>)
                        }
                    </div>
            </div>
        </section>
    );
};

export default Blog;