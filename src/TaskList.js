import React from 'react';

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;