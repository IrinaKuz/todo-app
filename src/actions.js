export const saveHeading = (heading) => {
    return {
      type: 'HEADING',
      heading: heading
    }
}

export const saveMessage = (message) => {
    return {
      type: 'MESSAGE',
      message: message
    }
}

export const addTodoAction = (todo) => {
    return {
      type: 'addTodo'
    }
}

export const deleteTodoAction = (date) => {
    return {
      type: 'deleteTodo',
      date: date
    }
}
