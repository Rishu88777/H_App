import React, { useState } from 'react';
import "./Dietaryassistance.scss";

const DietaryAssistance = () => {
  const [dietaryPlan, setDietaryPlan] = useState('');
  const [nutritionalGuidance, setNutritionalGuidance] = useState('');

  const handleDietaryPlanChange = (e) => {
    setDietaryPlan(e.target.value);
  };

  const handleNutritionalGuidanceChange = (e) => {
    setNutritionalGuidance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dietary Plan:", dietaryPlan);
    console.log("Nutritional Guidance:", nutritionalGuidance);
  };

  return (
    <div className="dietary-assistance">
      <h2>Dietary Assistance</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dietaryPlan">Customized Dietary Plan</label>
          <textarea
            id="dietaryPlan"
            value={dietaryPlan}
            onChange={handleDietaryPlanChange}
            placeholder="Enter your customized dietary plan here..."
            rows="4"
            cols="50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nutritionalGuidance">Nutritional Guidance</label>
          <textarea
            id="nutritionalGuidance"
            value={nutritionalGuidance}
            onChange={handleNutritionalGuidanceChange}
            placeholder="Enter your nutritional guidance here..."
            rows="4"
            cols="50"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DietaryAssistance;
