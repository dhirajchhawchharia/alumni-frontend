import React from 'react';

import '../styles/contactUs.css';
export default class ContactUs extends React.Component {
  render(){
    return (
      <div className="contactus-container">
          <div className="contact-links">
            <div className="phone contact-row">
              <img src="/static/images/phone-icon.svg" />
              <div className="contact-links-text-1">
                +91-XXX-XXXX-XXX
              </div>
            </div>
            <div className="email contact-row">
              <img src="/static/images/email-icon.svg" />
              <div className="contact-links-text-2">
                iarc@gmail.com
              </div>
            </div>
            <div className="location contact-row">
              <img src="/static/images/location-icon.svg" />
              <div className="contact-links-text-3">
                IIT Roorkee Campus
              </div>
            </div>
          </div>
          <div className="contact-follow-links">
            <div className="contact-follow-links-head">Follow us on:</div>
            <div className="contact-follow-links-container">
              <img src="/static/images/twitter-icon.svg" />
              <img src="/static/images/fb-icon.svg" />
              <img src="/static/images/linkedin-icon.svg" />
            </div>
          </div>
        </div>
      );
  }
}