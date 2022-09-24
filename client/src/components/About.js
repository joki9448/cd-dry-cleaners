import { useState } from 'react';

import ImageModal from './ImageModal';

function About() {
    const [selectedImg, setSelectedImg] = useState(0);
    const [isImgModalVisible, setIsImgModalVisible] = useState(false);

    const handleImgClick = (img) => {
        // console.log('image id: ', img.target.id)
        let imageId = img.target.id;
        setSelectedImg(imageId);

        setIsImgModalVisible(true);
    }

    return (
        <section className="about-section">
            <h1>About Us</h1>
            <hr></hr>
            <div className="about-content">
                
                <div className="about-img-container" onClick={handleImgClick}>
                    <img className="equip-img" id="3" src="/images/equip3.jpg" alt="equipment"></img>
                    <img className="equip-img" id="4" src="/images/equip4.jpg" alt="equipment"></img>
                    <img className="equip-img" id="2" src="/images/equip2.jpg" alt="equipment"></img>
                    <img className="equip-img" id="1" src="/images/equip1.jpg" alt="equipment"></img>
                </div>

                <div className="about-text-container">
                    <p className="about-text-header">
                        #<b>1</b> Most Trusted Dry Cleaners in Union City <i>- Since 1986 -</i>
                    </p>
                    <hr></hr>
                    <p className="about-text-desc">
                        For over <i>35 years</i>, we have been providing the highest quality <i>dry cleaning, reparation, and alteration</i> services in Union City, New Jersey.
                    </p>
                    <p className="about-text-desc">
                        Our customers can confidently entrust us with any of their cherished garments thanks to our <i>guaranteed expert care and high standards of excellence.</i>
                    </p>
                    <p className="about-text-desc">
                        Please feel free to visit us at your earliest convenience and experience the difference of our exceptional standards. Call us at <b>(201) - 864 - 7181</b> with any questions or concerns, or send us a message using the form located below!
                    </p>
                </div>
            </div>
            <div className="image-modal-container" style={{
                visibility: isImgModalVisible ? "visible" : "hidden",
                opacity: isImgModalVisible ? "1" : "0.2",
                transition: "all 0.18s ease-in-out"
            }}>
                <ImageModal selectedImg={selectedImg} setIsImgModalVisible={setIsImgModalVisible}/>
            </div>
        </section>  
    )
}

export default About;