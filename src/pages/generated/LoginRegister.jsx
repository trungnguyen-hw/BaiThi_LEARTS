import React from 'react';
import { Link } from 'react-router-dom';
import { useThemePlugins } from '../../hooks/useThemePlugins';

const LoginRegister = () => {
  useThemePlugins();

  return (
    <>
      

    
    <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="page-title">
                        <h1 className="title">Login & Register</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Login & Register</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-6">
                    <div className="user-login-register bg-light">
                        <div className="login-register-title">
                            <h2 className="title">Login</h2>
                            <p className="desc">Great to have you back!</p>
                        </div>
                        <div className="login-register-form">
                            <form action="#">
                                <div className="row learts-mb-n50">
                                    <div className="col-12 learts-mb-50">
                                        <input type="email" placeholder="Username or email address" />
                                    </div>
                                    <div className="col-12 learts-mb-50">
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <div className="col-12 text-center learts-mb-50">
                                        <button className="btn btn-dark btn-outline-hover-dark">login</button>
                                    </div>
                                    <div className="col-12 learts-mb-50">
                                        <div className="row learts-mb-n20">
                                            <div className="col-12 learts-mb-20">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-12 learts-mb-20">
                                                <Link to="/lost-password" className="fw-400">Lost your password?</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="user-login-register">
                        <div className="login-register-title">
                            <h2 className="title">Register</h2>
                            <p className="desc">If you don’t have an account, register now!</p>
                        </div>
                        <div className="login-register-form">
                            <form action="#">
                                <div className="row learts-mb-n50">
                                    <div className="col-12 learts-mb-20">
                                        <label htmlFor="registerEmail">Email address <abbr className="required">*</abbr></label>
                                        <input type="email" id="registerEmail" />
                                    </div>
                                    <div className="col-12 learts-mb-50">
                                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                                    </div>
                                    <div className="col-12 text-center learts-mb-50">
                                        <button className="btn btn-dark btn-outline-hover-dark">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    

    
    </>
  );
};

export default LoginRegister;
