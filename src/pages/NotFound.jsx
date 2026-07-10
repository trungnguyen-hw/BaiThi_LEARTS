import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/common/Breadcrumb';

const NotFound = () => {
  return (
    <>
      <Breadcrumb title="Page Not Found" currentText="404" />
      <div className="section section-padding border-top">
        <div className="container text-center py-5">
          <h1 className="display-1 text-muted mb-4" style={{ fontFamily: 'Marcellus, sans-serif' }}>404</h1>
          <h2 className="mb-4">Oops! That page can’t be found.</h2>
          <p className="text-secondary mb-5">It looks like nothing was found at this location. Maybe try one of the links in the menu above.</p>
          <Link to="/" className="btn btn-dark btn-hover-primary px-5 py-3" style={{ borderRadius: '0' }}>
            Back To Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
