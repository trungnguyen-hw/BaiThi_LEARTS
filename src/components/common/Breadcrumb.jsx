import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, parentLink = '/', parentText = 'Home', currentText }) => {
  return (
    <div
      className="page-title-section section"
      style={{ backgroundImage: "url('/assets/images/bg/page-title-1.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-title text-center">
              <h1 className="title">{title}</h1>
              <ul className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <Link to={parentLink}>{parentText}</Link>
                </li>
                <li className="breadcrumb-item active">{currentText || title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
