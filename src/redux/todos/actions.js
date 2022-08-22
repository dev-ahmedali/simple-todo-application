import {ADDED, DELETED, COMPLETEDALL, CLEARCOMPLETED, TOGGLED, COLORSELECTED} from './actionsTypes'

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText
    }
}

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
}

export const colorselected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
             todoId,
             color
        }
    }
}

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const completedall = () => {
    return {
        type: COMPLETEDALL,
    }
}

export const clearcompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}