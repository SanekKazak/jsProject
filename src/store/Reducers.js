import { combineReducers } from 'redux';
import { ADD_TASK, DELETE_TASK, SET_USER, ADD_USER, SET_TASKS, SET_USERS } from './Actions';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    case SET_TASKS:
      return action.payload;
    default:
      return state;
  }
};

const userReducer = (state = { user: null, users: [] }, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  tasks: tasksReducer,
  user: userReducer,
});