import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="task-list">
      <h2>Tasks List</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;