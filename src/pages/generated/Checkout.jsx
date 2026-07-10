import React from 'react';
import { Link } from 'react-router-dom';
import { useThemePlugins } from '../../hooks/useThemePlugins';

const Checkout = () => {
  useThemePlugins();

  return (
    <>
      

    
    <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
            <div className="row">
                <div className="col">

                    <div className="page-title">
                        <h1 className="title">Checkout</h1>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Checkout</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    

    
    <div className="section section-padding">
        <div className="container">
            <div className="checkout-coupon">
                <p className="coupon-toggle">Have a coupon? <a href="#checkout-coupon-form" data-bs-toggle="collapse">Click here to enter your code</a></p>
                <div id="checkout-coupon-form" className="collapse">
                    <div className="coupon-form">
                        <p>If you have a coupon code, please apply it below.</p>
                        <form action="#" className="learts-mb-n10">
                            <input className="learts-mb-10" type="text" placeholder="Coupon code" />
                            <button className="btn btn-dark btn-outline-hover-dark learts-mb-10">apply coupon</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="section-title2">
                <h2 className="title">Billing details</h2>
            </div>
            <form action="#" className="checkout-form learts-mb-50">
                <div className="row">
                    <div className="col-md-6 col-12 learts-mb-20">
                        <label htmlFor="bdFirstName">FIrst Name <abbr className="required">*</abbr></label>
                        <input type="text" id="bdFirstName" />
                    </div>
                    <div className="col-md-6 col-12 learts-mb-20">
                        <label htmlFor="bdLastName">Last Name <abbr className="required">*</abbr></label>
                        <input type="text" id="bdLastName" />
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdCompanyName">Company name (optional)</label>
                        <input type="text" id="bdCompanyName" />
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdCountry">Country <abbr className="required">*</abbr></label>
                        <select id="bdCountry" className="select2-basic">
                            <option defaultValue="">Select a country…</option>
                            <option defaultValue="AX">Åland Islands</option>
                            <option defaultValue="AF">Afghanistan</option>
                            <option defaultValue="AL">Albania</option>
                            <option defaultValue="DZ">Algeria</option>
                            <option defaultValue="AS">American Samoa</option>
                            <option defaultValue="AD">Andorra</option>
                            <option defaultValue="AO">Angola</option>
                            <option defaultValue="AI">Anguilla</option>
                            <option defaultValue="AQ">Antarctica</option>
                            <option defaultValue="AG">Antigua and Barbuda</option>
                            <option defaultValue="AR">Argentina</option>
                            <option defaultValue="AM">Armenia</option>
                            <option defaultValue="AW">Aruba</option>
                            <option defaultValue="AU">Australia</option>
                            <option defaultValue="AT">Austria</option>
                            <option defaultValue="AZ">Azerbaijan</option>
                            <option defaultValue="BS">Bahamas</option>
                            <option defaultValue="BH">Bahrain</option>
                            <option defaultValue="BD" selected>Bangladesh</option>
                            <option defaultValue="BB">Barbados</option>
                            <option defaultValue="BY">Belarus</option>
                            <option defaultValue="PW">Belau</option>
                            <option defaultValue="BE">Belgium</option>
                            <option defaultValue="BZ">Belize</option>
                            <option defaultValue="BJ">Benin</option>
                            <option defaultValue="BM">Bermuda</option>
                            <option defaultValue="BT">Bhutan</option>
                            <option defaultValue="BO">Bolivia</option>
                            <option defaultValue="BQ">Bonaire, Saint Eustatius and Saba</option>
                            <option defaultValue="BA">Bosnia and Herzegovina</option>
                            <option defaultValue="BW">Botswana</option>
                            <option defaultValue="BV">Bouvet Island</option>
                            <option defaultValue="BR">Brazil</option>
                            <option defaultValue="IO">British Indian Ocean Territory</option>
                            <option defaultValue="BN">Brunei</option>
                            <option defaultValue="BG">Bulgaria</option>
                            <option defaultValue="BF">Burkina Faso</option>
                            <option defaultValue="BI">Burundi</option>
                            <option defaultValue="KH">Cambodia</option>
                            <option defaultValue="CM">Cameroon</option>
                            <option defaultValue="CA">Canada</option>
                            <option defaultValue="CV">Cape Verde</option>
                            <option defaultValue="KY">Cayman Islands</option>
                            <option defaultValue="CF">Central African Republic</option>
                            <option defaultValue="TD">Chad</option>
                            <option defaultValue="CL">Chile</option>
                            <option defaultValue="CN">China</option>
                            <option defaultValue="CX">Christmas Island</option>
                            <option defaultValue="CC">Cocos (Keeling) Islands</option>
                            <option defaultValue="CO">Colombia</option>
                            <option defaultValue="KM">Comoros</option>
                            <option defaultValue="CG">Congo (Brazzaville)</option>
                            <option defaultValue="CD">Congo (Kinshasa)</option>
                            <option defaultValue="CK">Cook Islands</option>
                            <option defaultValue="CR">Costa Rica</option>
                            <option defaultValue="HR">Croatia</option>
                            <option defaultValue="CU">Cuba</option>
                            <option defaultValue="CW">Curaçao</option>
                            <option defaultValue="CY">Cyprus</option>
                            <option defaultValue="CZ">Czech Republic</option>
                            <option defaultValue="DK">Denmark</option>
                            <option defaultValue="DJ">Djibouti</option>
                            <option defaultValue="DM">Dominica</option>
                            <option defaultValue="DO">Dominican Republic</option>
                            <option defaultValue="EC">Ecuador</option>
                            <option defaultValue="EG">Egypt</option>
                            <option defaultValue="SV">El Salvador</option>
                            <option defaultValue="GQ">Equatorial Guinea</option>
                            <option defaultValue="ER">Eritrea</option>
                            <option defaultValue="EE">Estonia</option>
                            <option defaultValue="ET">Ethiopia</option>
                            <option defaultValue="FK">Falkland Islands</option>
                            <option defaultValue="FO">Faroe Islands</option>
                            <option defaultValue="FJ">Fiji</option>
                            <option defaultValue="FI">Finland</option>
                            <option defaultValue="FR">France</option>
                            <option defaultValue="GF">French Guiana</option>
                            <option defaultValue="PF">French Polynesia</option>
                            <option defaultValue="TF">French Southern Territories</option>
                            <option defaultValue="GA">Gabon</option>
                            <option defaultValue="GM">Gambia</option>
                            <option defaultValue="GE">Georgia</option>
                            <option defaultValue="DE">Germany</option>
                            <option defaultValue="GH">Ghana</option>
                            <option defaultValue="GI">Gibraltar</option>
                            <option defaultValue="GR">Greece</option>
                            <option defaultValue="GL">Greenland</option>
                            <option defaultValue="GD">Grenada</option>
                            <option defaultValue="GP">Guadeloupe</option>
                            <option defaultValue="GU">Guam</option>
                            <option defaultValue="GT">Guatemala</option>
                            <option defaultValue="GG">Guernsey</option>
                            <option defaultValue="GN">Guinea</option>
                            <option defaultValue="GW">Guinea-Bissau</option>
                            <option defaultValue="GY">Guyana</option>
                            <option defaultValue="HT">Haiti</option>
                            <option defaultValue="HM">Heard Island and McDonald Islands</option>
                            <option defaultValue="HN">Honduras</option>
                            <option defaultValue="HK">Hong Kong</option>
                            <option defaultValue="HU">Hungary</option>
                            <option defaultValue="IS">Iceland</option>
                            <option defaultValue="IN">India</option>
                            <option defaultValue="ID">Indonesia</option>
                            <option defaultValue="IR">Iran</option>
                            <option defaultValue="IQ">Iraq</option>
                            <option defaultValue="IE">Ireland</option>
                            <option defaultValue="IM">Isle of Man</option>
                            <option defaultValue="IL">Israel</option>
                            <option defaultValue="IT">Italy</option>
                            <option defaultValue="CI">Ivory Coast</option>
                            <option defaultValue="JM">Jamaica</option>
                            <option defaultValue="JP">Japan</option>
                            <option defaultValue="JE">Jersey</option>
                            <option defaultValue="JO">Jordan</option>
                            <option defaultValue="KZ">Kazakhstan</option>
                            <option defaultValue="KE">Kenya</option>
                            <option defaultValue="KI">Kiribati</option>
                            <option defaultValue="KW">Kuwait</option>
                            <option defaultValue="KG">Kyrgyzstan</option>
                            <option defaultValue="LA">Laos</option>
                            <option defaultValue="LV">Latvia</option>
                            <option defaultValue="LB">Lebanon</option>
                            <option defaultValue="LS">Lesotho</option>
                            <option defaultValue="LR">Liberia</option>
                            <option defaultValue="LY">Libya</option>
                            <option defaultValue="LI">Liechtenstein</option>
                            <option defaultValue="LT">Lithuania</option>
                            <option defaultValue="LU">Luxembourg</option>
                            <option defaultValue="MO">Macao</option>
                            <option defaultValue="MG">Madagascar</option>
                            <option defaultValue="MW">Malawi</option>
                            <option defaultValue="MY">Malaysia</option>
                            <option defaultValue="MV">Maldives</option>
                            <option defaultValue="ML">Mali</option>
                            <option defaultValue="MT">Malta</option>
                            <option defaultValue="MH">Marshall Islands</option>
                            <option defaultValue="MQ">Martinique</option>
                            <option defaultValue="MR">Mauritania</option>
                            <option defaultValue="MU">Mauritius</option>
                            <option defaultValue="YT">Mayotte</option>
                            <option defaultValue="MX">Mexico</option>
                            <option defaultValue="FM">Micronesia</option>
                            <option defaultValue="MD">Moldova</option>
                            <option defaultValue="MC">Monaco</option>
                            <option defaultValue="MN">Mongolia</option>
                            <option defaultValue="ME">Montenegro</option>
                            <option defaultValue="MS">Montserrat</option>
                            <option defaultValue="MA">Morocco</option>
                            <option defaultValue="MZ">Mozambique</option>
                            <option defaultValue="MM">Myanmar</option>
                            <option defaultValue="NA">Namibia</option>
                            <option defaultValue="NR">Nauru</option>
                            <option defaultValue="NP">Nepal</option>
                            <option defaultValue="NL">Netherlands</option>
                            <option defaultValue="NC">New Caledonia</option>
                            <option defaultValue="NZ">New Zealand</option>
                            <option defaultValue="NI">Nicaragua</option>
                            <option defaultValue="NE">Niger</option>
                            <option defaultValue="NG">Nigeria</option>
                            <option defaultValue="NU">Niue</option>
                            <option defaultValue="NF">Norfolk Island</option>
                            <option defaultValue="KP">North Korea</option>
                            <option defaultValue="MK">North Macedonia</option>
                            <option defaultValue="MP">Northern Mariana Islands</option>
                            <option defaultValue="NO">Norway</option>
                            <option defaultValue="OM">Oman</option>
                            <option defaultValue="PK">Pakistan</option>
                            <option defaultValue="PS">Palestinian Territory</option>
                            <option defaultValue="PA">Panama</option>
                            <option defaultValue="PG">Papua New Guinea</option>
                            <option defaultValue="PY">Paraguay</option>
                            <option defaultValue="PE">Peru</option>
                            <option defaultValue="PH">Philippines</option>
                            <option defaultValue="PN">Pitcairn</option>
                            <option defaultValue="PL">Poland</option>
                            <option defaultValue="PT">Portugal</option>
                            <option defaultValue="PR">Puerto Rico</option>
                            <option defaultValue="QA">Qatar</option>
                            <option defaultValue="RE">Reunion</option>
                            <option defaultValue="RO">Romania</option>
                            <option defaultValue="RU">Russia</option>
                            <option defaultValue="RW">Rwanda</option>
                            <option defaultValue="ST">São Tomé and Príncipe</option>
                            <option defaultValue="BL">Saint Barthélemy</option>
                            <option defaultValue="SH">Saint Helena</option>
                            <option defaultValue="KN">Saint Kitts and Nevis</option>
                            <option defaultValue="LC">Saint Lucia</option>
                            <option defaultValue="SX">Saint Martin (Dutch part)</option>
                            <option defaultValue="MF">Saint Martin (French part)</option>
                            <option defaultValue="PM">Saint Pierre and Miquelon</option>
                            <option defaultValue="VC">Saint Vincent and the Grenadines</option>
                            <option defaultValue="WS">Samoa</option>
                            <option defaultValue="SM">San Marino</option>
                            <option defaultValue="SA">Saudi Arabia</option>
                            <option defaultValue="SN">Senegal</option>
                            <option defaultValue="RS">Serbia</option>
                            <option defaultValue="SC">Seychelles</option>
                            <option defaultValue="SL">Sierra Leone</option>
                            <option defaultValue="SG">Singapore</option>
                            <option defaultValue="SK">Slovakia</option>
                            <option defaultValue="SI">Slovenia</option>
                            <option defaultValue="SB">Solomon Islands</option>
                            <option defaultValue="SO">Somalia</option>
                            <option defaultValue="ZA">South Africa</option>
                            <option defaultValue="GS">South Georgia/Sandwich Islands</option>
                            <option defaultValue="KR">South Korea</option>
                            <option defaultValue="SS">South Sudan</option>
                            <option defaultValue="ES">Spain</option>
                            <option defaultValue="LK">Sri Lanka</option>
                            <option defaultValue="SD">Sudan</option>
                            <option defaultValue="SR">Suriname</option>
                            <option defaultValue="SJ">Svalbard and Jan Mayen</option>
                            <option defaultValue="SZ">Swaziland</option>
                            <option defaultValue="SE">Sweden</option>
                            <option defaultValue="CH">Switzerland</option>
                            <option defaultValue="SY">Syria</option>
                            <option defaultValue="TW">Taiwan</option>
                            <option defaultValue="TJ">Tajikistan</option>
                            <option defaultValue="TZ">Tanzania</option>
                            <option defaultValue="TH">Thailand</option>
                            <option defaultValue="TL">Timor-Leste</option>
                            <option defaultValue="TG">Togo</option>
                            <option defaultValue="TK">Tokelau</option>
                            <option defaultValue="TO">Tonga</option>
                            <option defaultValue="TT">Trinidad and Tobago</option>
                            <option defaultValue="TN">Tunisia</option>
                            <option defaultValue="TR">Turkey</option>
                            <option defaultValue="TM">Turkmenistan</option>
                            <option defaultValue="TC">Turks and Caicos Islands</option>
                            <option defaultValue="TV">Tuvalu</option>
                            <option defaultValue="UG">Uganda</option>
                            <option defaultValue="UA">Ukraine</option>
                            <option defaultValue="AE">United Arab Emirates</option>
                            <option defaultValue="GB">United Kingdom (UK)</option>
                            <option defaultValue="US">United States (US)</option>
                            <option defaultValue="UM">United States (US) Minor Outlying Islands</option>
                            <option defaultValue="UY">Uruguay</option>
                            <option defaultValue="UZ">Uzbekistan</option>
                            <option defaultValue="VU">Vanuatu</option>
                            <option defaultValue="VA">Vatican</option>
                            <option defaultValue="VE">Venezuela</option>
                            <option defaultValue="VN">Vietnam</option>
                            <option defaultValue="VG">Virgin Islands (British)</option>
                            <option defaultValue="VI">Virgin Islands (US)</option>
                            <option defaultValue="WF">Wallis and Futuna</option>
                            <option defaultValue="EH">Western Sahara</option>
                            <option defaultValue="YE">Yemen</option>
                            <option defaultValue="ZM">Zambia</option>
                            <option defaultValue="ZW">Zimbabwe</option>
                        </select>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdAddress1">Street address <abbr className="required">*</abbr></label>
                        <input type="text" id="bdAddress1" placeholder="House number and street name" />
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdAddress2" className="sr-only">Apartment, suite, unit etc. (optional)</label>
                        <input type="text" id="bdAddress2" placeholder="Apartment, suite, unit etc. (optional) " />
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdTownOrCity">Town / City <abbr className="required">*</abbr></label>
                        <input type="text" id="bdTownOrCity" />
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdDistrict">District <abbr className="required">*</abbr></label>
                        <select id="bdDistrict" className="select2-basic">
                            <option defaultValue="">Select an option…</option>
                            <option defaultValue="BD-05">Bagerhat</option>
                            <option defaultValue="BD-01">Bandarban</option>
                            <option defaultValue="BD-02">Barguna</option>
                            <option defaultValue="BD-06">Barishal</option>
                            <option defaultValue="BD-07">Bhola</option>
                            <option defaultValue="BD-03">Bogura</option>
                            <option defaultValue="BD-04">Brahmanbaria</option>
                            <option defaultValue="BD-09">Chandpur</option>
                            <option defaultValue="BD-10">Chattogram</option>
                            <option defaultValue="BD-12">Chuadanga</option>
                            <option defaultValue="BD-11">Cox's Bazar</option>
                            <option defaultValue="BD-08">Cumilla</option>
                            <option defaultValue="BD-13">Dhaka</option>
                            <option defaultValue="BD-14">Dinajpur</option>
                            <option defaultValue="BD-15">Faridpur </option>
                            <option defaultValue="BD-16">Feni</option>
                            <option defaultValue="BD-19">Gaibandha</option>
                            <option defaultValue="BD-18">Gazipur</option>
                            <option defaultValue="BD-17">Gopalganj</option>
                            <option defaultValue="BD-20">Habiganj</option>
                            <option defaultValue="BD-21">Jamalpur</option>
                            <option defaultValue="BD-22">Jashore</option>
                            <option defaultValue="BD-25">Jhalokati</option>
                            <option defaultValue="BD-23">Jhenaidah</option>
                            <option defaultValue="BD-24">Joypurhat</option>
                            <option defaultValue="BD-29">Khagrachhari</option>
                            <option defaultValue="BD-27">Khulna</option>
                            <option defaultValue="BD-26">Kishoreganj</option>
                            <option defaultValue="BD-28">Kurigram</option>
                            <option defaultValue="BD-30">Kushtia</option>
                            <option defaultValue="BD-31">Lakshmipur</option>
                            <option defaultValue="BD-32">Lalmonirhat</option>
                            <option defaultValue="BD-36">Madaripur</option>
                            <option defaultValue="BD-37">Magura</option>
                            <option defaultValue="BD-33">Manikganj </option>
                            <option defaultValue="BD-39">Meherpur</option>
                            <option defaultValue="BD-38">Moulvibazar</option>
                            <option defaultValue="BD-35">Munshiganj</option>
                            <option defaultValue="BD-34">Mymensingh</option>
                            <option defaultValue="BD-48">Naogaon</option>
                            <option defaultValue="BD-43">Narail</option>
                            <option defaultValue="BD-40">Narayanganj</option>
                            <option defaultValue="BD-42">Narsingdi</option>
                            <option defaultValue="BD-44">Natore</option>
                            <option defaultValue="BD-45">Nawabganj</option>
                            <option defaultValue="BD-41">Netrakona</option>
                            <option defaultValue="BD-46">Nilphamari</option>
                            <option defaultValue="BD-47">Noakhali</option>
                            <option defaultValue="BD-49">Pabna</option>
                            <option defaultValue="BD-52">Panchagarh</option>
                            <option defaultValue="BD-51">Patuakhali</option>
                            <option defaultValue="BD-50">Pirojpur</option>
                            <option defaultValue="BD-53">Rajbari</option>
                            <option defaultValue="BD-54">Rajshahi</option>
                            <option defaultValue="BD-56">Rangamati</option>
                            <option defaultValue="BD-55">Rangpur</option>
                            <option defaultValue="BD-58">Satkhira</option>
                            <option defaultValue="BD-62">Shariatpur</option>
                            <option defaultValue="BD-57">Sherpur</option>
                            <option defaultValue="BD-59">Sirajganj</option>
                            <option defaultValue="BD-61">Sunamganj</option>
                            <option defaultValue="BD-60">Sylhet</option>
                            <option defaultValue="BD-63">Tangail</option>
                            <option defaultValue="BD-64">Thakurgaon</option>
                        </select>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdPostcode">Postcode / ZIP (optional)</label>
                        <input type="text" id="bdPostcode" />
                    </div>
                    <div className="col-md-6 col-12 learts-mb-20">
                        <label htmlFor="bdEmail">Email address <abbr className="required">*</abbr></label>
                        <input type="text" id="bdEmail" />
                    </div>
                    <div className="col-md-6 col-12 learts-mb-30">
                        <label htmlFor="bdPhone">Phone <abbr className="required">*</abbr></label>
                        <input type="text" id="bdPhone" />
                    </div>
                    <div className="col-12 learts-mb-40">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Create an account?</label>
                        </div>
                    </div>
                    <div className="col-12 learts-mb-20">
                        <label htmlFor="bdOrderNote">Order Notes (optional)</label>
                        <textarea id="bdOrderNote" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                    </div>
                </div>
            </form>
            <div className="section-title2 text-center">
                <h2 className="title">Your order</h2>
            </div>
            <div className="row learts-mb-n30">
                <div className="col-lg-6 order-lg-2 learts-mb-30">
                    <div className="order-review">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="name">Product</th>
                                    <th className="total">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="name">Walnut Cutting Board&nbsp; <strong className="quantity">×&nbsp;1</strong></td>
                                    <td className="total"><span>£100.00</span></td>
                                </tr>
                                <tr>
                                    <td className="name">Pizza Plate Tray&nbsp; <strong className="quantity">×&nbsp;1</strong></td>
                                    <td className="total"><span>£22.00</span></td>
                                </tr>
                                <tr>
                                    <td className="name">Minimalist Ceramic Pot - Pearl river, Large&nbsp; <strong className="quantity">×&nbsp;1</strong></td>
                                    <td className="total"><span>£120.00</span></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="subtotal">
                                    <th>Subtotal</th>
                                    <td><span>£242.00</span></td>
                                </tr>
                                <tr className="total">
                                    <th>Total</th>
                                    <td><strong><span>£242.00</span></strong></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1 learts-mb-30">
                    <div className="order-payment">
                        <div className="payment-method">
                            <div className="accordion" id="paymentMethod">
                                <div className="card active">
                                    <div className="card-header">
                                        <button data-bs-toggle="collapse" data-bs-target="#checkPayments">Check payments</button>
                                    </div>
                                    <div id="checkPayments" className="collapse show" data-bs-parent="#paymentMethod">
                                        <div className="card-body">
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button data-bs-toggle="collapse" data-bs-target="#cashkPayments">Cash on delivery </button>
                                    </div>
                                    <div id="cashkPayments" className="collapse" data-bs-parent="#paymentMethod">
                                        <div className="card-body">
                                            <p>Pay with cash upon delivery.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <button data-bs-toggle="collapse" data-bs-target="#payPalPayments">PayPal <img src="/assets/images/others/pay-2.webp" alt="" /></button>
                                    </div>
                                    <div id="payPalPayments" className="collapse" data-bs-parent="#paymentMethod">
                                        <div className="card-body">
                                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="payment-note">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                            <button className="btn btn-dark btn-outline-hover-dark">place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    </>
  );
};

export default Checkout;
