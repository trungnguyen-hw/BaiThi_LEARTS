import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsFAQ = () => {
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
                        <h1 className="title">FAQs</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">FAQs</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="row row-cols-lg-2 row-cols-1 learts-mb-n40">

                <div className="col learts-mb-40">
                    
                    <div className="section-title2">
                        <h2 className="title">Accordion</h2>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <div className="accordion" id="faq-accordion">
                                <div className="card active">
                                    <div className="card-header">
                                        <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#faq-accordion-1">Is the theme responsive and customizable?</button>
                                    </div>

                                    <div id="faq-accordion-1" className="collapse show" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p>Learts appears professional in design and responsive in performance. It proves to be highly customizable and efficient for building eCommerce shops. Engage yourself in the most effortless and well-appointed process with Learts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq-accordion-2">How long can I get theme updates for free?</button>
                                    </div>

                                    <div id="faq-accordion-2" className="collapse" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p>ThemeMove commits to deliver regular updates of all theme items with careful error detecting, bug fixing, and design updating. The purpose of constant updating is to ensure the theme you have is in sync with the latest technology and trend.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq-accordion-3">Is the support period extendable?</button>
                                    </div>

                                    <div id="faq-accordion-3" className="collapse" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p>Our customer support team is available at office hours, six days a week to answer any kind of questions you have about our products, help you on problems with your themes, and give consultation for all of your presale questions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq-accordion-4">Do you accept extra theme services?</button>
                                    </div>

                                    <div id="faq-accordion-4" className="collapse" data-bs-parent="#faq-accordion">
                                        <div className="card-body">
                                            <p>We are available to freelance hiring with on-demand extra services, including WordPress site design/ redesign, WordPress installation, all-in-one customization, video production, video editing and stop motion video producing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col learts-mb-40">
                    
                    <div className="section-title2">
                        <h2 className="title">Toogles</h2>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <div className="accordion" id="faq-toggles">
                                <div className="card active">
                                    <div className="card-header">
                                        <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#faq-toggles-1">Is the theme responsive and customizable?</button>
                                    </div>

                                    <div id="faq-toggles-1" className="collapse show">
                                        <div className="card-body">
                                            <p>Learts appears professional in design and responsive in performance. It proves to be highly customizable and efficient for building eCommerce shops. Engage yourself in the most effortless and well-appointed process with Learts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq-toggles-2">How long can I get theme updates for free?</button>
                                    </div>

                                    <div id="faq-toggles-2" className="collapse">
                                        <div className="card-body">
                                            <p>ThemeMove commits to deliver regular updates of all theme items with careful error detecting, bug fixing, and design updating. The purpose of constant updating is to ensure the theme you have is in sync with the latest technology and trend.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq-toggles-3">Is the support period extendable?</button>
                                    </div>

                                    <div id="faq-toggles-3" className="collapse">
                                        <div className="card-body">
                                            <p>Our customer support team is available at office hours, six days a week to answer any kind of questions you have about our products, help you on problems with your themes, and give consultation for all of your presale questions.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#faq-toggles-4">Do you accept extra theme services?</button>
                                    </div>

                                    <div id="faq-toggles-4" className="collapse">
                                        <div className="card-body">
                                            <p>We are available to freelance hiring with on-demand extra services, including WordPress site design/ redesign, WordPress installation, all-in-one customization, video production, video editing and stop motion video producing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    

    
    </>
  );
};

export default ElementsFAQ;
