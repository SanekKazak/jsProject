import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/Actions';

function TaskTable({ tasks }) {
  const dispatch = useDispatch();

  return (
    <div className="task-table">
      <h2>Tasks Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description || 'No description'}</td>
              <td>
                <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
