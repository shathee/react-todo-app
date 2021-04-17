import { ActionTypes } from './action-types';

export const setIntialTodos = (todos) => {
    return {
        type: ActionTypes.SET_INTIAL_TODOS,
        payload: todos,
    }
}

export const addTodo = (todo) => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: todo,
    }
}