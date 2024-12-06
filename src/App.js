import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route 
            path="/tasks" 
            render={() => user ? (
              <>
                <h1>Task Manager</h1>
                <TaskForm />
                <TaskTable tasks={tasks} />
                <TaskList tasks={tasks} />
              </>
            ) : (
              <Redirect to="/login" />
            )} 
          />
          <Redirect from="*" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;