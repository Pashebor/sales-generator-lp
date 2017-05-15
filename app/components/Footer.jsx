import React, { Component } from 'react';


const Footer = () => {
    return(
        <footer className="footer">
            <div className="separatortop">
                <svg id="triangle" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 0 V 100 H 0 L 50 0 L 100 100 H 100 V 0 Z" ></path></svg>
            </div>
            <div className="container">
              <div className="footer-container">
                <a href="http://sales-generator.ru"><div className="footer__logo"><img src="images/saleslogowhite.svg"  alt="Sales Generator logo"/></div></a>
                <address className="footer__address">
                    <p>info@salesgenerator.pro</p>
                    <p>г. Москва</p>
                </address>
                <div className="footer__phone">
                    <p>Звонок по России бесплатный</p>
                    <a href="tel: 8 (800) 775 43 06">8 (800) 775 43 06</a>
                </div>

              </div>
            </div>
        </footer>
    );
};

export default Footer;