import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAction } from './actions';

function TodoItem (props) {
    const dispatch = useDispatch();
    return (
        <li className="todoItem">
            <h2>{props.heading}</h2>
            <p>{props.body}</p>
            <span title="delete todo"
                onClick={() => dispatch(deleteTodoAction(props.date))}>&times;</span>
        </li>
    )
}

export default TodoItem;