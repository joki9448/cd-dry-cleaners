import React from 'react';

import GoogleMap from './GoogleMap';

function Contact() {

    return (
        <section className="contact-section">
            <h1>Contact Us</h1>
            <hr className="hr-2"></hr>

            <div className="contact-content">
                <ul>
                    <h3>Hours :</h3>
                    <div className="hours">
                        <ol>
                            <li>Sun:</li>
                            <li>Mon:</li>
                            <li>Tue:</li>
                            <li>Wed:</li>
                            <li>Thu:</li>
                            <li>Fri:</li>
                            <li>Sat:</li>
                        </ol>
                        <ol>
                            <li>Closed</li>
                            <li>7:30 AM - 5 PM</li>
                            <li>7:30 AM - 5 PM</li>
                            <li>7:30 AM - 5 PM</li>
                            <li>7:30 AM - 5 PM</li>
                            <li>7:30 AM - 5 PM</li>
                            <li>8 AM - 4 PM</li>
                        </ol>
                    </div>
                </ul>
                <div className="address-section">
                    <h3>Address :</h3>
                    <p>2004 Bergenline Ave</p>
                    <p>Union City, NJ 07087</p>

                    <p>(201)-864-7181</p>
                    <div className="directions">
                        <a 
                            href="https://www.google.com/maps/dir//2004+Bergenline+Avenue,+Union+City,+NJ/@40.7649643,-74.036093,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c257810905b63b:0xc7bd1ac8f12aedcc!2m2!1d-74.0339043!2d40.7649603"
                            target="_blank"
                            style={{textDecoration: "none"}}
                        >
                            Get Directions
                        </a>
                    </div>
                </div>

                <GoogleMap />
            </div>


        </section>
    )
}

export default Contact;