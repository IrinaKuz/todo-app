export const addTodoAction = ({heading, message, date}) => {
    return {
      type: 'addTodo',
      heading: heading,
      message: message,
      date: date
    }
}

export const deleteTodoAction = (date) => {
    return {
      type: 'deleteTodo',
      date: date
    }
}
