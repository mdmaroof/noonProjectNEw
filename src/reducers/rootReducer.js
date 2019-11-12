const initState = {
    toDoList : ['abc','xyz'],
    toDoListCompleted : []
}
const rootReducer = (state = initState , action) => {
    if(action.type === 'ADD_TODO'){
        return {...state, toDoList : [...state.toDoList, action.payload]}
    }
    if(action.type === 'ADD_TODO_LIST_COMPLETED'){
        return {...state, toDoListCompleted : [...state.toDoListCompleted, action.payload]}
    }
    if(action.type === 'REMOVE_FROM_TODOLIST_COMPLETED'){
        const indexList = state.toDoListCompleted.indexOf(action.payload);
        state.toDoListCompleted.splice(indexList, 1);
        return {...state,toDoListCompleted:[...state.toDoListCompleted]}
    }
    return state
}
export default rootReducer