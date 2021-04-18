import { ActionTypes } from './action-types';

const defaultState = {
    todos: []
};

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.SET_INTIAL_TODOS:
            return {...state, todos:action.payload};
        case ActionTypes.ADD_TODO:
            return state;
        case ActionTypes.TOOGLE_TODO_STATUS:
            return state;
        default:
            return state;
    }
}

export default todoReducer;