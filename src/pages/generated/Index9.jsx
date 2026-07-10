import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index9 = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="parallax-banner parallax-banner-1" data-scrollax-parent="true">
        <div className="parallax-image" data-scrollax="properties: { translateY: '30%' }"><img src="/assets/images/banner/parallax/parallax-1.webp" alt="parallax-1" /></div>
        <div className="content text-center" data-scrollax="properties: { opacity: '2' }">
            <span className="sub-title">Large</span>
            <h2 className="title">CUTTING BOARD</h2>
        </div>
    </div>
    

    
    <div className="parallax-banner parallax-banner-2" data-scrollax-parent="true">
        <div className="parallax-image" data-scrollax="properties: { translateY: '30%' }"><img src="/assets/images/banner/parallax/parallax-2.webp" alt="parallax-2" /></div>
        <div className="content text-center">
            <img className="price " src="/assets/images/banner/parallax/parallax-2-1.webp" alt="Price" />
            <h2 className="title">MOROCCO VASE</h2>
            <span className="sub-title">Superb quality</span>
        </div>
    </div>
    

    
    <div className="parallax-banner parallax-banner-3" data-scrollax-parent="true">
        <div className="parallax-image" data-scrollax="properties: { translateY: '30%' }"><img src="/assets/images/banner/parallax/parallax-3.webp" alt="parallax-3" /></div>
        <div className="content text-center">
            <img className="sub-title " src="/assets/images/banner/parallax/parallax-3-1.webp" alt="Price" />
            <h2 className="title">Alumsy Shelf</h2>
            <Link to="/shop" className="btn btn-light btn-hover-dark">shop now</Link>
        </div>
    </div>
    

    
    <div className="parallax-banner parallax-banner-4" data-scrollax-parent="true">
        <div className="parallax-image" data-scrollax="properties: { translateY: '30%' }"><img src="/assets/images/banner/parallax/parallax-4.webp" alt="parallax-4" /></div>
        <div className="content">
            <span className="sub-title">made for you</span>
            <h2 className="title">Salmon Cutting Board Blue Stone</h2>
            <Link to="/shop">+ Online store</Link>
        </div>
    </div>
    

    
    </>
  );
};

export default Index9;
