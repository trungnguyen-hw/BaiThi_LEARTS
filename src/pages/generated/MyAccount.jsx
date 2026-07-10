import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
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
                        <h1 className="title">My Account</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">My Account</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="row learts-mb-n30">

                
                <div className="col-lg-4 col-12 learts-mb-30">
                    <div className="myaccount-tab-list nav">
                        <a href="#dashboad" className="active" data-bs-toggle="tab">Dashboard <i className="far fa-home"></i></a>
                        <a href="#orders" data-bs-toggle="tab">Orders <i className="far fa-file-alt"></i></a>
                        <a href="#download" data-bs-toggle="tab">Download <i className="far fa-arrow-to-bottom"></i></a>
                        <a href="#address" data-bs-toggle="tab">address <i className="far fa-map-marker-alt"></i></a>
                        <a href="#account-info" data-bs-toggle="tab">Account Details <i className="far fa-user"></i></a>
                        <Link to="/login">Logout <i className="far fa-sign-out-alt"></i></Link>
                    </div>
                </div>
                

                
                <div className="col-lg-8 col-12 learts-mb-30">
                    <div className="tab-content">

                        
                        <div className="tab-pane fade show active" id="dashboad">
                            <div className="myaccount-content dashboad">
                                <p>Hello <strong>didiv91396</strong> (not <strong>didiv91396</strong>? <Link to="/login">Log out</Link>)</p>
                                <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.</p>
                            </div>
                        </div>
                        

                        
                        <div className="tab-pane fade" id="orders">
                            <div className="myaccount-content order">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Order</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Aug 22, 2018</td>
                                                <td>Pending</td>
                                                <td>$3000</td>
                                                <td><Link to="/cart">View</Link></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>July 22, 2018</td>
                                                <td>Approved</td>
                                                <td>$200</td>
                                                <td><Link to="/cart">View</Link></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>June 12, 2017</td>
                                                <td>On Hold</td>
                                                <td>$990</td>
                                                <td><Link to="/cart">View</Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="tab-pane fade" id="download">
                            <div className="myaccount-content download">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Date</th>
                                                <th>Expire</th>
                                                <th>Download</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Haven - Free Real Estate PSD Template</td>
                                                <td>Aug 22, 2018</td>
                                                <td>Yes</td>
                                                <td><a href="#"><i className="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                            </tr>
                                            <tr>
                                                <td>HasTech - Profolio Business Template</td>
                                                <td>Sep 12, 2018</td>
                                                <td>Never</td>
                                                <td><a href="#"><i className="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="tab-pane fade" id="address">
                            <div className="myaccount-content address">
                                <p>The following addresses will be used on the checkout page by default.</p>
                                <div className="row learts-mb-n30">
                                    <div className="col-md-6 col-12 learts-mb-30">
                                        <h4 className="title">Billing Address <a href="#" className="edit-link">edit</a></h4>
                                        <address>
                                            <p><strong>Alex Tuntuni</strong></p>
                                            <p>1355 Market St, Suite 900 <br />
                                                San Francisco, CA 94103</p>
                                            <p>Mobile: (123) 456-7890</p>
                                        </address>
                                    </div>
                                    <div className="col-md-6 col-12 learts-mb-30">
                                        <h4 className="title">Shipping Address <a href="#" className="edit-link">edit</a></h4>
                                        <address>
                                            <p><strong>Alex Tuntuni</strong></p>
                                            <p>1355 Market St, Suite 900 <br />
                                                San Francisco, CA 94103</p>
                                            <p>Mobile: (123) 456-7890</p>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        
                        <div className="tab-pane fade" id="account-info">
                            <div className="myaccount-content account-details">
                                <div className="account-details-form">
                                    <form action="#">
                                        <div className="row learts-mb-n30">
                                            <div className="col-md-6 col-12 learts-mb-30">
                                                <div className="single-input-item">
                                                    <label htmlFor="first-name">First Name <abbr className="required">*</abbr></label>
                                                    <input type="text" id="first-name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12 learts-mb-30">
                                                <div className="single-input-item">
                                                    <label htmlFor="last-name">Last Name <abbr className="required">*</abbr></label>
                                                    <input type="text" id="last-name" />
                                                </div>
                                            </div>
                                            <div className="col-12 learts-mb-30">
                                                <label htmlFor="display-name">Display Name <abbr className="required">*</abbr></label>
                                                <input type="text" id="display-name" defaultValue="didiv91396" />
                                                <p>This will be how your name will be displayed in the account section and in reviews</p>
                                            </div>
                                            <div className="col-12 learts-mb-30">
                                                <label htmlFor="email">Email Addres <abbr className="required">*</abbr></label>
                                                <input type="email" id="email" defaultValue="didiv91396@ismailgul.net" />
                                            </div>
                                            <div className="col-12 learts-mb-30 learts-mt-30">
                                                <fieldset>
                                                    <legend>Password change</legend>
                                                    <div className="row learts-mb-n30">
                                                        <div className="col-12 learts-mb-30">
                                                            <label htmlFor="current-pwd">Current password (leave blank to leave unchanged)</label>
                                                            <input type="password" id="current-pwd" />
                                                        </div>
                                                        <div className="col-12 learts-mb-30">
                                                            <label htmlFor="new-pwd">New password (leave blank to leave unchanged)</label>
                                                            <input type="password" id="new-pwd" />
                                                        </div>
                                                        <div className="col-12 learts-mb-30">
                                                            <label htmlFor="confirm-pwd">Confirm new password</label>
                                                            <input type="password" id="confirm-pwd" />
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="col-12 learts-mb-30">
                                                <button className="btn btn-dark btn-outline-hover-dark">Save Changes</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> 

                    </div>
                </div> 
            </div>
        </div>
    </div>
    

    
    </>
  );
};

export default MyAccount;
