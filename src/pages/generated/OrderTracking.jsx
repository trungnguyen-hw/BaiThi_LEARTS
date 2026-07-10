import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OrderTracking = () => {
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
                        <h1 className="title">Order Tracking</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Order Tracking</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">

            <div className="order-tracking">
                <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <form action="#">
                    <div className="row learts-mb-n30">
                        <div className="col-12 learts-mb-30">
                            <label htmlFor="orderID">Order ID</label>
                            <input id="orderID" type="text" placeholder="Found in your order confirmation email." />
                        </div>
                        <div className="col-12 learts-mb-30">
                            <label htmlFor="billingEmail">Billing email</label>
                            <input id="billingEmail" type="text" placeholder="Email you used during checkout." />
                        </div>
                        <div className="col-12 text-center learts-mb-30">
                            <button className="btn btn-dark btn-outline-hover-dark">Track</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    </div>
    

    
    </>
  );
};

export default OrderTracking;
