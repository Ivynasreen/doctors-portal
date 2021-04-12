import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  bel="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item active">
                            <Link to = "/home"><a class="nav-link me-5 " href="#">Home</a></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 text-white" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 text-white" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-5 text-white" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
};

export default Navbar;