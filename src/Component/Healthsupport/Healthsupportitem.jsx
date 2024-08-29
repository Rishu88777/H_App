import React  from 'react';
import { Link } from 'react-router-dom';


const HealthSupportItem = ({ item }) => {
  const { title, firstinfo, secinfo, thirdinfo } = item;

 

  return (
    <div className="health-support-item">
      <h2>{title}</h2>
      <ul>
        <li>{firstinfo}</li>
        <li>{secinfo}</li>
        <li>{thirdinfo}</li>
      </ul>
      <div className="btn">
        <Link to="https://forms.gle/do2mGLfRaVuXdwaB8">
          <button  >Book Services</button>
        </Link>
      </div>
    </div>
  );
};

export default HealthSupportItem;
