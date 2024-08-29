import React from 'react';
import HealthSupportItem from "./Healthsupportitem"
import "./Healthsupport.scss";

export default function Healthsupport() {
  const healthsupport = [
    {
        title: 'Companionship Services',
        firstinfo: 'Friendly companions for seniors',
        secinfo: 'Assistance with daily activities',
        thirdinfo: 'Emotional and social support',
      },
      {
        title: 'Nursing Care',
        firstinfo: 'Skilled nurses for specialized care',
        secinfo: 'Medication administration',
        thirdinfo: 'Wound dressing',
      },
      {
        title: 'Memory Care',
        firstinfo: 'Specialized care for memory-related conditions',
        secinfo: 'Memory-enhancing activities',
        thirdinfo: 'Safety measures for memory care',
      },
      {
        title: 'Respite Care',
        firstinfo: 'Temporary care for primary caregivers',
        secinfo: 'Short-term relief for family members',
        thirdinfo: 'Peace of mind during breaks',
      },
    {
      title: 'Doctor Home Visit',
      firstinfo: 'Customized visits for needs',
      secinfo: 'Consultation and treatment',
      thirdinfo: 'T&C Apply',
    },
   
    {
      title: 'Diagnostics at Home',
      firstinfo: 'Sample collection at home',
      secinfo: 'Pathology and radiology tests',
      thirdinfo: 'Quick and reliable results',
    },
    {
        title: 'Physical Therapy',
        firstinfo: 'Specialized exercises for mobility',
        secinfo: 'Pain management',
        thirdinfo: 'Rehabilitation after injury/surgery',
      },
      
      {
        title: 'Medication Management',
        firstinfo: 'Personalized medication schedules',
        secinfo: 'Medication reminders',
        thirdinfo: 'Monitoring and adjustments as needed',
      },
      {
        title: 'Dietary Assistance',
        firstinfo: 'Customized dietary plans',
        secinfo: 'Nutritional guidance',
        thirdinfo: 'Meal preparation support',
      },
      {
        title: 'Personal Care',
        firstinfo: 'Assistance with bathing and grooming',
        secinfo: 'Toileting and incontinence care',
        thirdinfo: 'Maintaining personal hygiene',
      }
      
  ];

  return (
    <div className='health'> 
      <h1>Health Support Services</h1>
      <div className="health-support-list">
        {healthsupport.map((item, index) => (
          <HealthSupportItem key={index} item={item} />
        ))}
        
      </div>
    </div>
  );
}
