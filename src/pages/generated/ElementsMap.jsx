import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsMap = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="page-title">
                        <h1 className="title">Google Maps</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">Google Maps</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="section-title2 text-center">
                <h2 className="title title-icon-both">Default options</h2>
                <p>Fill in your precise location and office address to display on Google Maps</p>
            </div>
            <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd" style={{ "border": "0" }} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    </div>
    

    
    <div className="section section-fluid section-padding border-top">
        <div className="container">
            <div className="section-title2 text-center">
                <h2 className="title title-icon-both">Google maps full width</h2>
                <p>Fill in your precise location and office address to display on Google Maps</p>
            </div>
            <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd" style={{ "border": "0" }} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
    </div>
    

    
    </>
  );
};

export default ElementsMap;
