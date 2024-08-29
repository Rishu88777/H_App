import React from 'react';
import "./Home.scss";
import { useNavigate } from 'react-router-dom';



export default function Home() {
  const navigate = useNavigate();
  const handlefeature = (index) =>{
      if(index === 1){
        navigate('/Monitoring')
      }
      if(index === 2){
        navigate('/healthsupport')
      }
      if(index === 3){
        navigate('/medicationmanagement')
      }
  }
  return (
    <>
      <div className="home">
        {/* <Navbar /> */}
        <div className="hero">
          <h1>Welcome, Rishu Shrivastava!</h1>
          <p>
            Stay Healthy, Stay Happy!
          </p>
        </div>

        <div className="features">
          <div className="feature" onClick={()=> handlefeature(1)}>
            <i className="fas fa-heartbeat"></i>
            <h2>Vital Sign Monitoring</h2>
            <p>
              Monitor your heart rate, blood pressure, and more with our advanced wearable devices.
            </p>
          </div>
          <div className="feature" onClick={()=> handlefeature(2)}>
            <i className="fas fa-walking"></i>
            <h2>Activity Tracking</h2>
            <p>
              Keep track of your daily activity levels, steps, and distance covered to stay active.
            </p>
          </div>
          <div className="feature" onClick={()=> handlefeature(3)}>
            <i className="fas fa-pills"></i>
            <h2>Medication Reminders</h2>
            <p>
              Never miss a dose again! Get timely reminders to take your medications as prescribed.
            </p>
          </div>
        </div>

        <div className="circledetails">
          <div className="txtdetails">
            <h1>500+</h1>
            <p>Elders Empowered</p>
          </div>
          <div className="txtdetails">
            <h1>PAN India</h1>
            <p>Operated</p>
          </div>
          <div className="txtdetails">
            <h1>100+</h1>
            <p>Lives Saved</p>
          </div>
          <div className="txtdetails">
            <h1>40+</h1>
            <p>Events Organised</p>
          </div>

        </div>
      </div>
    </>
  )
}
