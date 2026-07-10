import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ElementsInstagram = () => {
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
                        <h1 className="title">Gallery</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#">Elements</a></li>
                            <li className="breadcrumb-item active">Gallery</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="section-title2 text-center">
                <h2 className="title title-icon-both">Gallery carousel</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            <div className="instafeed instafeed-carousel instafeed-carousel1">
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-1.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-2.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-3.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-4.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-2.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-3.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding border-top">
        <div className="container">
            <div className="section-title2 text-center">
                <h2 className="title title-icon-both">Gallery Grid</h2>
                <p>Browse a wide range of distinctive pieces of arts you could never find elsewhere.</p>
            </div>
            <div className="instafeed instafeed-grid">
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-1.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-2.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-3.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
                <a className="instafeed-item" href="#">
                    <img src="/assets/images/instagram/instagram-4.webp" alt="instagram image" />
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
    

    
    </>
  );
};

export default ElementsInstagram;
