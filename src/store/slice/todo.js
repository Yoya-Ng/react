import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
      todolist: [
        { id: 1, name: "first todo on redux1" },
        { id: 2, name: "second todo in list" },
        { name: "second todo in list2" },
      ],
    },
    reducers: {
      addTodo: (state, action) => {
        state.todolist.push(action.payload);
      },
    },
  });

 

// export const selectTodo = (state) => state.todo; // <---加入這行
// export const { addTodo } = todoSlice.actions; // <-- 加上這行
// export default todoSlice.reducer;


const todoAppState = {
    todos: [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
        status: 'Active',
        colors: ['red', 'blue']
    }
  }