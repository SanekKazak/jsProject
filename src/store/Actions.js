export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_USER = 'SET_USER';
export const ADD_USER = 'ADD_USER';
export const SET_TASKS = 'SET_TASKS';
export const SET_USERS = 'SET_USERS';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const setTasks = (tasks) => ({
  type: SET_TASKS,
  payload: tasks,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});