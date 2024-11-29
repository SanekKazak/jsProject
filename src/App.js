import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  const tasks = useSelector((state) => state.tasks);
  const user = useSelector((state) => state.user.user);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/tasks" 
            element={user ? (
              <>
                <h1>Task Manager</h1>
                <TaskForm />
                <TaskTable tasks={tasks} />
                <TaskList tasks={tasks} />
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