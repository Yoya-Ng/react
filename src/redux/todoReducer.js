const todoReducer = (state = {
    todolist: [
        { id: 1, name: "first todo on redux1" },
        { id: 2, name: "second todo in list" },
      ]
}, action) => {
    switch(action.type) { 
        // 依據 action type 決定要做的事情
        case 'todo': {
            //要做的事
            state.todolist.push({id:state.todolist.length +1 , name:action.value});
            return {...state}
        }
        default: 
        // 如果沒有 action type 就執行 default
        return state 
    }
}

export default todoReducer;