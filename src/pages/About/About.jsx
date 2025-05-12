import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="about-content">
                <h2>Our Story</h2>
                <p>
                    We started as a small retail business and understand the challenges
                    of managing inventory and sales. Our mission is to provide affordable,
                    easy-to-use solutions for businesses of all sizes.
                </p>

                <h2>Our Team</h2>
                <p>
                    Our team consists of experienced developers and retail professionals
                    who are passionate about creating tools that make business management easier.
                </p>

                <h2>Contact Us</h2>
                <p>
                    Email: support@retailpro.com<br />
                    Phone: (123) 456-7890<br />
                    Address: 123 Business St, Retail City
                </p>
            </div>
        </div>
    );
};

export default About;