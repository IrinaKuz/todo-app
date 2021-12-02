import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// initial state
const initial_state = {
  heading: 'Hello',
  message: 'Redux!',
  todo: []
}

function addTodoReducer(state = initial_state, action) {
  switch(action.type) {
    case 'addTodo':
      return {
        ...state,
        heading: '',
        message: '',
        todo: state.todo.concat({ // add the new todo to the list of todos
          heading: state.heading, // a new todo is made up of current heading
          message: state.message, // and a current message
          date: new Date()      // add new date
        })
      }
    case 'deleteTodo':
      return {
        ...state,
        todo: state.todo.filter((el) => el.date !== action.date)
      }
    case 'HEADING':
      return {
        ...state,
        heading: action.heading
      }
    case 'MESSAGE':
      return {
        ...state,
        message: action.message
      }
    default:
      return {
        ...state
      }
  }
}
// create store
const store = createStore(addTodoReducer);
export default store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

