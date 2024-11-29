import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h2>Tasks List</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;