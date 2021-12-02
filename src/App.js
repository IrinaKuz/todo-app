import React from 'react';
import TodoItem from './TodoItem';
import { addTodoAction, saveHeading, saveMessage} from './actions';
import { useSelector, useDispatch } from 'react-redux';

function TodoList (state) {
  const todoList = state.map(el => (
      <TodoItem 
        key={el.date} 
        date={el.date}
        heading={el.heading} 
        body={el.message} 
      />)
    );
  return todoList;
}

function App() {
  const todo = useSelector(state => state.todo);
  const heading = useSelector(state => state.heading);
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();
  const todoList = TodoList(todo);
  return (
      <div className="App">
        <form className="addTodoForm" onSubmit={(e) => { e.preventDefault()}}>
          <h2>Add todo</h2>
          <div>
            <label>Heading</label>
            <input 
              type="text" 
              onChange={(e) => dispatch(saveHeading(e.target.value))}
              value={heading}
            />
          </div>
          <div>
            <label>To do</label>
            <textarea 
              rows="5"
              onChange={(e) => dispatch(saveMessage(e.target.value))}
              value={message}
            >
            </textarea>
          </div>
          <button 
            type="submit" 
            onClick={() => dispatch(addTodoAction({ heading: 'heading', message: 'message' }))} 
          >+ Add todo</button>
        </form>
        <ul className='todoList'>
          { todoList }
        </ul>
      </div>
    );
  }

export default App;
