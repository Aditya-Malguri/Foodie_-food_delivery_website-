import "./Footer.css"
import React from 'react'
import {assets} from "../../assets/frontend_assets/assets"

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.foodie_logo} alt="logo" />
                <p>From carefully selected ingredients to top-notch delivery, we’re committed to bringing you food that tastes as good as it looks. Discover a better way to dine — without ever leaving home. </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="facebook" />
                    <img src={assets.twitter_icon} alt="twitter" />
                    <img src={assets.linkedin_icon} alt="linkedin" />
                </div>
            
            
            </div>



            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+123465798</li>
                    <li>foodie@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2025 ©Foodie.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer

