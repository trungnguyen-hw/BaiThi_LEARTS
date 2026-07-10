import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  useEffect(() => {
    // Re-initialize jQuery plugins for this page if available
    if (window.initJQueryPlugins) {
      window.initJQueryPlugins();
    }
  }, []);

  return (
    <>
      

    
    <div className="section-404 section" data-bg-image="/assets/images/bg/bg-404.webp">
        <div className="container">
            <div className="content-404">
                <h1 className="title">Oops!</h1>
                <h2 className="sub-title">Page not found!</h2>
                <p>You could either go back or go to homepage</p>
                <div className="buttons">
                    <Link className="btn btn-primary btn-outline-hover-dark" to="/">Go back</Link>
                    <Link className="btn btn-dark btn-outline-hover-dark" to="/">Homepage</Link>
                </div>
            </div>
        </div>
    </div>
    

    

    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    

    
    






    </>
  );
};

export default Page404;
