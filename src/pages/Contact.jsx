import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <>
      <Breadcrumb title="Contact Us" currentText="Contact Us" />

      <div className="section section-padding border-top">
        <div className="container">
          <div className="row">
            {/* Left Column: Form */}
            <div className="col-lg-7 col-12 learts-mb-40">
              <h2 className="mb-4 text-dark" style={{ fontFamily: 'Marcellus, sans-serif' }}>Send a Message</h2>
              
              {submitted && (
                <div className="alert alert-success" role="alert">
                  Thank you! Your message has been sent successfully. We will get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control border-1 p-3"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      style={{ borderRadius: '0' }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control border-1 p-3"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      style={{ borderRadius: '0' }}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control border-1 p-3"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{ borderRadius: '0' }}
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <textarea
                      className="form-control border-1 p-3"
                      rows="6"
                      placeholder="Message *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      style={{ borderRadius: '0' }}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-dark btn-hover-primary px-5 py-3"
                      style={{ borderRadius: '0', fontWeight: 'bold', textTransform: 'uppercase' }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Contact details */}
            <div className="col-lg-4 col-12 ms-auto learts-mb-40 text-secondary">
              <h2 className="mb-4 text-dark" style={{ fontFamily: 'Marcellus, sans-serif' }}>Store Details</h2>
              <div className="mb-4">
                <h5>Address</h5>
                <p className="mt-2">123 Handcrafted Way, Craftin Town, USA</p>
              </div>
              <div className="mb-4">
                <h5>Telephone</h5>
                <p className="mt-2">+1 234 567 890</p>
              </div>
              <div className="mb-4">
                <h5>Email</h5>
                <p className="mt-2">support@learts.com</p>
              </div>
              <div>
                <h5>Working Hours</h5>
                <p className="mt-2 mb-0">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
