import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TaskForm from './TaskForm';
import TaskTable from './TaskTable';
import TaskList from './TaskList';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login users={users} setUser={setUser} />} />
          <Route path="/register" element={<Register addUser={addUser} />} />
          <Route 
            path="/tasks" 
            element={user ? (
              <>
                <h1>Task Manager</h1>
                <TaskForm addTask={addTask} />
                <TaskTable tasks={tasks} deleteTask={deleteTask} />
                <TaskList tasks={tasks} deleteTask={deleteTask} />
              </>
            ) : (
              <Navigate to="/login" />
            )} 
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;