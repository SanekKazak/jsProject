import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/Actions';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description };
    dispatch(addTask(newTask));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Add New Task</h2>
      <label htmlFor="taskTitle">Title</label>
      <input
        type="text"
        id="taskTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="taskDescription">Description</label>
      <textarea
        id="taskDescription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;