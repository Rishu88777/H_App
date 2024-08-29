import React, { useState } from 'react';
import "./MedicationManagement.scss";
import Daliytask from './Daliytask';

export default function MedicationManagement() {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'task1', isCompleted: false, time: "12 P.M.", dose: 7, },
    { id: 2, text: 'task2', isCompleted: false, time: "12 P.M.", dose: 7, },
    { id: 3, text: 'task3', isCompleted: false, time: "12 P.M.", dose: 7, },
  ]);
  const [isAdd, setisAdd] = useState(false);
  const [medicineName, setMedicineName] = useState('');
  const [time, setTime] = useState('');
  const [dose, setDose] = useState('');

  const addMedicine = () => {
    if (medicineName && time && dose) {
      const newMedicine = {
        id: Date.now(),
        text: medicineName,
        isCompleted: false,
        time: time,
        dose: dose,
      };
      setTasks([...tasks, newMedicine]);
      setMedicineName('');
      setTime('');
      setDose('');
      setisAdd(false)
    } else {
      window.alert("pls fill all information")
    }
  };

  const handleaddtask = ()=>{
    setisAdd(!isAdd);
  }

  const handlecancemedicine = () => {
    setisAdd(false);
  }
  return (
    <>
      <div className="medicationmanagement">
        <div className="management">
          <h1>Today's Task: </h1>
          <button onClick={handleaddtask}>Add Task</button>
        </div>
        <Daliytask tasks={tasks} setTasks={setTasks} />
      </div>
      {isAdd &&
        <div className="form">
          <h1>Hi Add your Task☺☺</h1>
          <div className="addmedicane">
            <input
              type="text"
              placeholder="Medicine Name"
              autoFocus
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
            />
            <input
              type="time"
              placeholder="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <input
              type="text"
              placeholder="Dose"
              value={dose}
              onChange={(e) => setDose(e.target.value)}
            />
            <button onClick={addMedicine}>Add Medicine</button>
            <button onClick={handlecancemedicine}>Cancel</button>
          </div>
        </div>
      }
    </>
  );
}
