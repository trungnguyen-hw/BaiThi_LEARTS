import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LostPassword = () => {
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
                        <h1 className="title">Lost Password</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Lost Password</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="lost-password">
                <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                <form action="#">
                    <div className="row learts-mb-n30">
                        <div className="col-12 learts-mb-30">
                            <label htmlFor="userName">Username or email</label>
                            <input id="userName" type="text" />
                        </div>
                        <div className="col-12 text-center learts-mb-30">
                            <button className="btn btn-dark btn-outline-hover-dark">reset password</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </div>
    

    
    </>
  );
};

export default LostPassword;
