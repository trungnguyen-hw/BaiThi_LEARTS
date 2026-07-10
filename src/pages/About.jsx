import React from 'react';
import Breadcrumb from '../components/common/Breadcrumb';

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" currentText="About Us" />

      <div className="section section-padding border-top">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0">
              <img
                src="/assets/images/banner/about/about-1.webp"
                alt="About Us"
                className="img-fluid border"
                style={{ width: '100%' }}
              />
            </div>
            <div className="col-lg-5 col-12 text-secondary">
              <h2 className="text-dark mb-4" style={{ fontFamily: 'Marcellus, sans-serif' }}>
                We are a creative agency of designers & makers.
              </h2>
              <p className="mb-3">
                At Learts, we believe in the beauty of handmade. Every piece of item we source has its own story,
                hand-carved by local artisans using techniques passed down through generations.
              </p>
              <p>
                Whether it is a ceramic coffee mug, an organic wood chopping board, or a beautiful cotton handbag,
                we put quality and craft first. Our tools are simple, our passion is unlimited.
              </p>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div className="col-md-4 mb-4">
              <div className="p-4 border">
                <i className="fas fa-heart text-danger mb-3" style={{ fontSize: '24px' }}></i>
                <h5>Made With Love</h5>
                <p className="text-secondary mt-2">Every order is hand-packed carefully to ensure safe delivery and warm smiles.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border">
                <i className="fas fa-leaf text-success mb-3" style={{ fontSize: '24px' }}></i>
                <h5>Eco Friendly</h5>
                <p className="text-secondary mt-2">We source 100% natural, chemical-free ingredients and wood from sustainable organic farms.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 border">
                <i className="fas fa-gem text-warning mb-3" style={{ fontSize: '24px' }}></i>
                <h5>Premium Quality</h5>
                <p className="text-secondary mt-2">Our strict QA guarantees that each hand-crafted item stands up to heavy everyday utility.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
