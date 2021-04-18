import { ActionTypes } from './action-types';

const defaultState = {
    todos: []
};

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_INTIAL_TODOS:
            return {...state, todos:action.payload};
        case ActionTypes.ADD_TODO:
            return { 
                ...state,
                todos: state.todos.concat(action.payload)
            };
        case ActionTypes.TOOGLE_TODO_STATUS:
            const updatedTodos = state.todos.map((t) =>
            t.id === action.payload.id
                ? {
                    ...t,
                    done: !t.done
                }
                : t
            );
            return {...state, todos:updatedTodos};
        default:
            return state;
    }
}

export default todoReducer;