import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/Actions';

function TaskCard({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description || 'No description'}</p>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
}

export default TaskCard;