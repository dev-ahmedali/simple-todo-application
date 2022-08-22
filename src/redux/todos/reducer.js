import initialState  from "./initialState"
import {ADDED, DELETED, COMPLETEDALL, CLEARCOMPLETED, TOGGLED, COLORSELECTED} from './actionsTypes'

function nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state)
                }
            ]

            case TOGGLED:
                return state.map(todo => {
                    if (todo.id !== action.payload) {
                        return todo;
                    }
                    return {
                        ...state,
                        completed: !completed
                    }
                })

                case DELETED:
                   
    
        default:
          
    }
}