import React from 'react';
import "./Daliytask.scss";

export default function Daliytask({ tasks, setTasks }) {
    let date = new Date().toDateString();
        console.log(tasks)
    const handleCompleteTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    };

    const handleDeleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
      };

    return (
        <>
            <div className="dailytask">
                <div className="taskcart">
                    <div className="todaytime">
                        <h1>Task Date: {date}</h1>
                        {/* <h1>Time: </h1> */}
                    </div>
                   <table >
                        <thead>
                            <tr>
                            <th>Task</th>
                            <th>Time</th>
                            <th>Dose</th>
                            </tr>
                           
                        </thead>
                        
                       <tbody>
                        {
                            tasks.map((task) => (
                                <>
                                <tr key={task.id}>
                                <td>{truncateText(task.text, 10)}</td>
                                <td>{task.time}</td>
                                <td>{task.dose}</td>
                                <span>
                                    <button
                                        onClick={() => handleCompleteTask(task.id)}
                                        style={{
                                            backgroundColor: task.isCompleted ? '#28a745' : '#007bff',
                                        }}
                                    >
                                        {task.isCompleted ? 'Completed' : 'Complete'}
                                    </button>
                                    <button className="deletebtn" onClick={() => handleDeleteTask(task.id)}>
                                        Delete
                                    </button>
                                </span>
                                </tr>
                                
                                </>
                            ))
                        }
                       </tbody>

                   </table>




                   
                </div>
            </div>
        </>
    );
}
