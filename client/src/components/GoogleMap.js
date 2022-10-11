import React from 'react';

function GoogleMap() {
    return (
            <iframe 
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.761202167999!2d-74.03775102882925!3d40.76495074579742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2579cbd3213c9%3A0xe70e89e0c9be64e1!2sC%20%26%20D%20DRY%20CLEANRES!5e0!3m2!1sen!2sus!4v1663615971533!5m2!1sen!2sus" 
                // style={{border: "0", height: "25em", width: "25em"}}
                allowFullscreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
    )
}

export default GoogleMap;