import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Navbar from './Navbar';


// initial state
const initial_state = {
  todo: []
}

function addTodoReducer(state = initial_state, action) {
  switch(action.type) {
    case 'addTodo':
      return {
        ...state,
        todo: state.todo.concat({ // add the new todo to the list of todos
          heading: action.heading, 
          message: action.message, 
          date: action.date  
        })
      }
    case 'deleteTodo':
      return {
        ...state,
        todo: state.todo.filter((el) => el.date !== action.date)
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
      <Navbar />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

