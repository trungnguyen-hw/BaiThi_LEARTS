import React from 'react';
import { Link } from 'react-router-dom';
import { useThemePlugins } from '../../hooks/useThemePlugins';

const ContactUs = () => {
  useThemePlugins();

  return (
    <>
      

    
    <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="page-title">
                        <h1 className="title">Contact us</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Contact us</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Keep in touch with us</h2>
                <p>Been tearing your hair out to find the perfect gift for your loved ones? Try visiting our nationwide local stores. You can also contact us to become partner or distributor. Call us, send us an email or make an appointment now.</p>
            </div>
            

            
            <div className="row learts-mb-n30">
                <div className="col-lg-4 col-md-6 col-12 learts-mb-30">
                    <div className="contact-info">
                        <h4 className="title">ADDRESS</h4>
                        <span className="info"><i className="icon fas fa-map-marker-alt"></i> 1800 Abbot Kinney Blvd. Unit D & E Venice</span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 learts-mb-30">
                    <div className="contact-info">
                        <h4 className="title">CONTACT</h4>
                        <span className="info"><i className="icon fas fa-phone-alt"></i> Mobile: (+88) – 1990 – 6886 <br /> Hotline: 1800 – 1102</span>
                        <span className="info"><i className="icon far fa-envelope"></i> Mail: <a href="#">contact@leartsstore.com</a></span>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 learts-mb-30">
                    <div className="contact-info">
                        <h4 className="title"> HOUR OF OPERATION</h4>
                        <span className="info"><i className="icon far fa-clock"></i> Monday – Friday : 09:00 – 20:00 <br /> Sunday & Saturday: 10:30 – 22:00</span>
                    </div>
                </div>
            </div>
            

            
                    <div className="contact-map-placeholder text-center p-5 bg-light border" style={{ borderRadius: '8px', minHeight: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="fas fa-map-marked-alt fa-3x mb-3" style={{ color: '#b89c7d' }}></i>
                        <h4 className="mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600 }}>Our Location on Google Maps</h4>
                        <p className="mb-4 text-muted">1800 Abbot Kinney Blvd. Unit D & E Venice, CA 90291</p>
                        <a href="https://maps.google.com/?q=1800+Abbot+Kinney+Blvd.+Venice" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-outline-hover-dark">
                            <i className="fas fa-external-link-alt me-2"></i> Open in Google Maps
                        </a>
                    </div>
            

        </div>
    </div>
    

    
    <div className="section section-padding pt-0">
        <div className="container">
            
            <div className="section-title2 text-center">
                <h2 className="title">Send a message</h2>
            </div>
            

            <div className="row">
                <div className="col-lg-8 col-12 mx-auto">
                    <div className="contact-form">
                        <form action="https://html-demo-orcin.vercel.app/premium/learts/assets/php/contact-mail.php" id="contact-form" method="post">
                            <div className="row learts-mb-n30">
                                <div className="col-md-6 col-12 learts-mb-30"><input type="text" placeholder="Your Name *" name="name" /></div>
                                <div className="col-md-6 col-12 learts-mb-30"><input type="email" placeholder="Email *" name="email" /></div>
                                <div className="col-12 learts-mb-30"><textarea name="message" placeholder="Message"></textarea></div>
                                <div className="col-12 text-center learts-mb-30"><button className="btn btn-dark btn-outline-hover-dark">Submit</button></div>
                            </div>
                        </form>
                        <p className="form-messege"></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    

    
    </>
  );
};

export default ContactUs;
