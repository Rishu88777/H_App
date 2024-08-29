import React from 'react';
import "./Aboutus.scss"
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about">
        <img src="https://img.freepik.com/premium-vector/young-doctor-take-care-old-lady_10045-246.jpg?w=2000" className="pic" alt="Girl" />
        <div className="text">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
          <div className="data">
            <Link to="/contactus" className='hire'>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
