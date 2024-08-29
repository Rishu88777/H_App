import React from 'react';
import './Contactus.scss'; 

const Contactus= () => {
  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">IILM , Greater Noida</div>
            <div className="text-two">U.P.</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+91-8877709208</div>
            <div className="text-two">+91-8877709208</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">rishushrivastava264@gmail.com</div>
            <div className="text-two">rishu.k.srivastav.cs25@iilmcet.ac.in</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>If you have any work from me or any types of quries related to my service, you can send me message from here. It's my pleasure to help you.</p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box message-box">
              <textarea placeholder="Enter your message"></textarea>
            </div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
