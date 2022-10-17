export const addTodo = (d) =>{
    return {
        type : 'ADD_TODO',
        payload : d
    }
}

export const deleteTodoCompleted = (d) =>{
    return {
        type : 'DELETE_TODO_COMPLETED',
        payload : d
    }
}
export const deleteTodoInCompleted = (d) =>{
    return {
        type : 'DELETE_TODO_INCOMPLETED',
        payload : d
    }
}

export const editTodoCompleted = (d) =>{
    return {
        type : 'EDIT_TODO_COMPLETED',
        payload : d
    }
}

export const editTodoInCompleted = (d) =>{
    return {
        type : 'EDIT_TODO_INCOMPLETED',
        payload : d
    }
}

export const moveToCompleted = (d) =>{
    return {
        type : 'MOVE_TO_COMPLETED_TODO',
        payload : d
    }
}

export const moveToInCompleted = (d) =>{
    return {
        type : 'MOVE_TO_INCOMPLETED_TODO',
        payload : d
    }
}