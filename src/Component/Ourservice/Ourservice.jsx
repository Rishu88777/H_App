import React from 'react';
import "./Ourservices.scss";
import { useNavigate } from 'react-router-dom';

export default function Ourservice() {

  const services = [
    {
      title: 'Home Health Care',
      icon: 'https://cdn-icons-png.flaticon.com/128/1692/1692130.png',
      description: 'Professional health care services in the comfort of your home.',
    },
    {
      title: 'Medication Management',
      icon: 'https://cdn-icons-png.flaticon.com/128/5151/5151442.png',
      description: 'Personalized medication management and reminders.',
    },
    {
      title: 'Dietary Assistance',
      icon: 'https://cdn-icons-png.flaticon.com/128/2346/2346793.png',
      description: 'Customized dietary plans and nutritional guidance.',
    },
    {
      title: 'Physical Therapy',
      icon: 'https://cdn-icons-png.flaticon.com/128/5047/5047322.png',
      description: 'Specialized exercises and treatments to improve mobility and strength.',
    },
    {
      title: 'Companionship Services',
      icon: 'https://cdn-icons-png.flaticon.com/128/3802/3802213.png',
      description: 'Friendly companionship and assistance with daily activities.',
    },
    {
      title: 'Memory Care',
      icon: 'https://cdn-icons-png.flaticon.com/128/4999/4999182.png',
      description: 'Support and care for individuals with memory-related conditions.',
    },
    {
      title: 'Respite Care',
      icon: 'https://cdn-icons-png.flaticon.com/128/4405/4405077.png',
      description: 'Temporary care to relieve primary caregivers and family members.',
    },
  ];
  const navigate = useNavigate();
  const handleservicecard = (index) => {
    console.log(index);
    if (index === 0) {
      navigate("/healthsupport")
    }
    if (index === 1) {
      navigate("/medicationmanagement")
    }
    if (index === 2) {
      navigate("/dietaryassistance")
    }
    if (index === 3) {
      navigate("/physicaltherapy")
    }

    if (index === 4) {
      navigate("/companionship")
    }

    if (index === 5) {
      navigate("/notfind")
    }

    if (index === 6) {
      navigate("/respitecare")
    }

    



  }
  return (
    <div className="ourservices">
      <h1>How We Help</h1>
      <div className="ourservicesmain">
        {services.map((service, index) => (
          <div className="service-card" key={index} onClick={() => handleservicecard(index)}>
            <img src={service.icon} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
