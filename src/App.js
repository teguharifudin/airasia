import React, { } from "react";
import { Route, Link, NavLink, Routes, HashRouter } from "react-router-dom";
import airasia from './logo.svg';
import './App.css';
import Home from "./Home";
import Promotions from "./Promotions";
import FAQs from "./FAQs";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div className="site-mobile-menu-body"></div>
        </div>
        <nav>
          <div id="logo"><img src={airasia} alt="airasia" title="airasia" className="logo"  style={{ width: "50%" }} /></div>
          <label for="drop" class="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/promotions">Promotions</NavLink></li>
              <li><NavLink to="/FAQs">FAQs</NavLink></li>
            </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/promotions" element={<Promotions />}></Route>
            <Route exact path="/FAQs" element={<FAQs />}></Route>
          </Routes>
        </div>
        <div className="site-section mb-5 mt-5" id="call-to-action">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                  <h3 className="section-title">Customer Service</h3>
                  <p>For detail information related to the promo, please contact us by telephone +6012345678900.</p>
              </div>
              <div className="col-lg-3 text-center">
                  <Link className="cta-btn" to="tel:+6012345678900" target="_blank"><i class="icon-phone" aria-hidden="true"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section bg-dark" id="contact-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <h3 className="section-title mb-3">Subscribe</h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-7">
                <p>Or connect with us</p>
                <Link to="" title="Facebook"><i class="icon-facebook" aria-hidden="true"></i></Link>&nbsp;&nbsp;
                <Link to="" title="Instagram"><i class="icon-instagram" aria-hidden="true"></i></Link>&nbsp;&nbsp;
                <Link to="" title="Twitter"><i class="icon-twitter" aria-hidden="true"></i></Link>&nbsp;&nbsp;
                <Link to="" title="YouTube"><i class="icon-play" aria-hidden="true"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <p>Copyright &copy; 2022 Capital A Berhad. This website is owned and operated by AirAsia Com Travel Sdn Bhd (201301020508), a registered travel agency (KPK/LN License No: 8287). Your usage of this website indicates that you agree to be bound by our&nbsp;
                  <Link target="_blank" to="https://www.airasia.com/aa/about-us/en/gb/terms-and-conditions.html" title="Terms and Conditions" size="XSmall" color="primary" tabindex="0">Terms and Conditions</Link>,&nbsp;
                  <Link target="_blank" to="https://www.airasia.com/aa/about-us/en/gb/terms-of-use.html" title="Terms of Use" size="XSmall" color="primary" tabindex="0">Terms of Use</Link>&nbsp;and&nbsp;
                  <Link target="_blank" to="https://www.airasia.com/aa/about-us/en/gb/privacy-statement.html" title="Privacy Statement" size="XSmall" color="primary" tabindex="0">Privacy Statement</Link>.
                </p>
                <p>
                  <Link target="_blank" to="https://ir.airasia.com/corporate_structure.html" title="AirAsia Berhad (Malaysia)" size="XSmall" color="primary" tabindex="0">AirAsia Berhad (Malaysia)</Link>&nbsp;|&nbsp;
                  <Link target="_blank" to="https://www.aavplc.com/en/thai-airasia-taa/organisation-structure" title="Thai AirAsia Co. Ltd" size="XSmall" color="primary" tabindex="0">Thai AirAsia Co. Ltd</Link>&nbsp;|&nbsp;
                  <Link target="_blank" to="https://www.airasia.com/aa/about-us/en/gb/airasia-indonesia-organizational-structure.html" title="PT Indonesia AirAsia" size="XSmall" color="primary" tabindex="0">PT Indonesia AirAsia</Link>&nbsp;|&nbsp;
                  <Link target="_blank" to="https://www.airasia.com/aa/about-us/en/gb/airasia-philippine-organizational-structure.html" title="Philippines AirAsia Inc." size="XSmall" color="primary" tabindex="0">Philippines AirAsia Inc.</Link>&nbsp;|&nbsp;
                  <Link target="_blank" to="https://www.airasia.com/aa/about-us/en/gb/airasia-india-organizational-structure.html" title="AirAsia (India) Limited" size="XSmall" color="primary" tabindex="0">AirAsia (India) Limited</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
